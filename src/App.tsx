/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroVoiceSection } from './components/HeroVoiceSection';
import { ConversationView } from './components/ConversationView';
import { ResourceMatchCard } from './components/ResourceMatchCard';
import { DocumentCoachModal } from './components/DocumentCoachModal';
import { StepActionGuide } from './components/StepActionGuide';
import { JargonTranslatorModal } from './components/JargonTranslatorModal';
import { ComparisonSection } from './components/ComparisonSection';
import { WhyPenmAISection } from './components/WhyPenmAISection';
import { ImpactSection } from './components/ImpactSection';
import { AccessibilityModal } from './components/AccessibilityModal';
import { TrustSafetyFooter } from './components/TrustSafetyFooter';
import { DemoModeBar } from './components/DemoModeBar';

import { speechService } from './services/speechService';
import { conversationEngine } from './services/conversationEngine';
import { GOV_RESOURCES } from './data/resources';
import { UI_TRANSLATIONS } from './data/translations';
import { 
  Language, 
  ChatMessage, 
  GovResource, 
  UserProfileState, 
  AccessibilitySettings 
} from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('ta');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentTranscript, setCurrentTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [activeSpeakingId, setActiveSpeakingId] = useState<string | null>(null);
  
  const [matchedResource, setMatchedResource] = useState<GovResource | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfileState>({
    completedQuestions: []
  });

  // Modals state
  const [showDocumentModal, setShowDocumentModal] = useState(false);
  const [showStepsModal, setShowStepsModal] = useState(false);
  const [showJargonModal, setShowJargonModal] = useState(false);
  const [showAccessibilityModal, setShowAccessibilityModal] = useState(false);

  // Accessibility
  const [accessibility, setAccessibility] = useState<AccessibilitySettings>({
    fontSize: 'normal',
    speechRate: 0.9,
    highContrast: false,
    autoSpeak: true,
  });

  // Demo mode state
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [demoStep, setDemoStep] = useState(0);

  const conversationEndRef = useRef<HTMLDivElement>(null);

  // Scroll to conversation whenever messages update
  useEffect(() => {
    if (messages.length > 0) {
      conversationEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, matchedResource]);

  // Voice playback helper
  const handleSpeak = (text: string, id?: string) => {
    setIsSpeaking(true);
    setActiveSpeakingId(id || 'generic');

    speechService.speak(text, language, {
      rate: accessibility.speechRate,
      onStart: () => {
        setIsSpeaking(true);
      },
      onEnd: () => {
        setIsSpeaking(false);
        setActiveSpeakingId(null);
      },
    });
  };

  const handleStopAudio = () => {
    speechService.stopSpeaking();
    setIsSpeaking(false);
    setActiveSpeakingId(null);
  };

  // Start speech recognition
  const handleStartListening = () => {
    handleStopAudio();
    setCurrentTranscript('');

    const started = speechService.startListening(language, {
      onStart: () => {
        setIsListening(true);
      },
      onResult: (transcript) => {
        setCurrentTranscript(transcript);
      },
      onError: (err) => {
        setIsListening(false);
        console.warn('Microphone error or permission denied:', err);
      },
      onEnd: () => {
        setIsListening(false);
        // If final transcript captured, auto-submit
        if (currentTranscript.trim()) {
          handleUserMessage(currentTranscript.trim());
          setCurrentTranscript('');
        }
      },
    });

    if (!started) {
      setIsListening(false);
    }
  };

  const handleStopListening = () => {
    speechService.stopListening();
    setIsListening(false);
    if (currentTranscript.trim()) {
      handleUserMessage(currentTranscript.trim());
      setCurrentTranscript('');
    }
  };

  // Process User message (voice or typed)
  const handleUserMessage = async (userText: string) => {
    if (!userText.trim()) return;

    handleStopAudio();

    const userMsg: ChatMessage = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text: userText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsProcessing(true);

    try {
      const result = await conversationEngine.processInput(
        userText,
        language,
        userProfile,
        [...messages, userMsg]
      );

      setMessages((prev) => [...prev, result.aiMessage]);
      setUserProfile(result.updatedProfile);

      if (result.matchedResource) {
        setMatchedResource(result.matchedResource);
      }

      // Auto speak response if enabled
      if (accessibility.autoSpeak && result.aiMessage.text) {
        handleSpeak(result.aiMessage.text, result.aiMessage.id);
      }
    } catch (err) {
      console.error('Error processing conversation:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  // "I Don't Know" (❓ எனக்குத் தெரியாது) trigger
  const handleIDontKnow = () => {
    const iDontKnowText = language === 'ta' 
      ? '❓ எனக்குத் தெரியாது' 
      : language === 'hi' 
      ? '❓ मुझे नहीं पता' 
      : "❓ I don't know";
    handleUserMessage(iDontKnowText);
  };

  // Reset conversation to initial hero state
  const handleResetConversation = () => {
    handleStopAudio();
    speechService.stopListening();
    setIsListening(false);
    setMessages([]);
    setMatchedResource(null);
    setUserProfile({ completedQuestions: [] });
    setCurrentTranscript('');
    setIsDemoMode(false);
    setDemoStep(0);
  };

  // 60-Second Guided Demo Flow (Lakshmi's Journey)
  const demoScenarios = [
    {
      description: 'படி 1: லட்சுமி குரல் வழி தேவையை கூறுகிறார்',
      userText: 'எனக்கு வேலை வேண்டும். நான் அதிகம் படிக்கவில்லை. எனக்கு என்ன உதவி கிடைக்கும்?',
    },
    {
      description: 'படி 2: penmAI வயது கேட்கிறது → லட்சுமி "32" என பதிலளிக்கிறார்',
      userText: '32',
    },
    {
      description: 'படி 3: மாவட்டம் கேட்கப்படுகிறது → லட்சுமி "❓ எனக்குத் தெரியாது" என கேட்கிறார்',
      userText: '❓ எனக்குத் தெரியாது',
    },
    {
      description: 'படி 4: penmAI வழிகாட்டுகிறது → லட்சுமி சென்னை என தேர்வு செய்கிறார்',
      userText: 'சென்னை (Chennai)',
    },
    {
      description: 'படி 5: முன் அனுபவம் கேட்கப்படுகிறது → லட்சுமி "இல்லை" என பதிலளிக்கிறார்',
      userText: 'வேலை செய்ததில்லை (இல்லை)',
    }
  ];

  const handleStartDemo = () => {
    handleResetConversation();
    setLanguage('ta');
    setIsDemoMode(true);
    setDemoStep(1);

    // Run first step
    setTimeout(() => {
      handleUserMessage(demoScenarios[0].userText);
    }, 300);
  };

  const handleNextDemoStep = () => {
    if (demoStep < demoScenarios.length) {
      const nextStepIndex = demoStep;
      setDemoStep(nextStepIndex + 1);
      handleUserMessage(demoScenarios[nextStepIndex].userText);
    }
  };

  // Font size multiplier class
  const getFontSizeClass = () => {
    switch (accessibility.fontSize) {
      case 'large':
        return 'text-[17px]';
      case 'xlarge':
        return 'text-[19px]';
      default:
        return 'text-base';
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${accessibility.highContrast ? 'high-contrast' : ''} ${getFontSizeClass()}`}>
      {/* Top Navbar */}
      <Navbar
        language={language}
        onLanguageChange={(newLang) => {
          setLanguage(newLang);
          handleStopAudio();
        }}
        onOpenJargonModal={() => setShowJargonModal(true)}
        onOpenAccessibilityModal={() => setShowAccessibilityModal(true)}
        onTriggerDemo={handleStartDemo}
        isDemoActive={isDemoMode}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroVoiceSection
          language={language}
          isListening={isListening}
          isProcessing={isProcessing}
          currentTranscript={currentTranscript}
          onStartListening={handleStartListening}
          onStopListening={handleStopListening}
          onSubmitText={handleUserMessage}
          onSelectSample={(sample) => handleUserMessage(sample)}
        />

        {/* Guided Conversation Stream */}
        <ConversationView
          messages={messages}
          language={language}
          isSpeaking={isSpeaking}
          activeSpeakingId={activeSpeakingId}
          onReadAloud={(text, id) => handleSpeak(text, id)}
          onStopAudio={handleStopAudio}
          onSelectQuickOption={(opt) => handleUserMessage(opt)}
          onIDontKnow={handleIDontKnow}
          onReset={handleResetConversation}
        />

        {/* Matched Government Resource Card */}
        {matchedResource && (
          <ResourceMatchCard
            resource={matchedResource}
            language={language}
            onOpenDocuments={() => setShowDocumentModal(true)}
            onOpenSteps={() => setShowStepsModal(true)}
            onReadAloud={(text) => handleSpeak(text)}
            onOpenJargonModal={() => setShowJargonModal(true)}
          />
        )}

        <div ref={conversationEndRef} />

        {/* Storytelling & Value Proposition Sections */}
        <ComparisonSection language={language} />
        <WhyPenmAISection language={language} />
        <ImpactSection language={language} />
      </main>

      {/* Trust & Safety Footer */}
      <TrustSafetyFooter language={language} />

      {/* 60-Second Demo Bar for Judges */}
      {isDemoMode && (
        <DemoModeBar
          language={language}
          currentStep={demoStep}
          totalSteps={demoScenarios.length}
          onNextStep={handleNextDemoStep}
          onRestartDemo={handleStartDemo}
          onExitDemo={() => setIsDemoMode(false)}
          stepDescription={demoScenarios[demoStep - 1]?.description || 'லட்சுமியின் நேரடி மாதிரி'}
        />
      )}

      {/* Document Coach Modal */}
      {matchedResource && (
        <DocumentCoachModal
          isOpen={showDocumentModal}
          onClose={() => setShowDocumentModal(false)}
          documents={matchedResource.documents}
          language={language}
          onSpeak={(text) => handleSpeak(text)}
        />
      )}

      {/* Step by Step Action Guide Modal */}
      {matchedResource && (
        <StepActionGuide
          isOpen={showStepsModal}
          onClose={() => setShowStepsModal(false)}
          steps={matchedResource.steps}
          language={language}
          onSpeak={(text) => handleSpeak(text)}
          officialUrl={matchedResource.officialUrl}
        />
      )}

      {/* Digital Jargon Translator Modal ("Explain This") */}
      <JargonTranslatorModal
        isOpen={showJargonModal}
        onClose={() => setShowJargonModal(false)}
        language={language}
        onSpeak={(text) => handleSpeak(text)}
      />

      {/* Accessibility Modal */}
      <AccessibilityModal
        isOpen={showAccessibilityModal}
        onClose={() => setShowAccessibilityModal(false)}
        settings={accessibility}
        onUpdateSettings={(newSettings) =>
          setAccessibility((prev) => ({ ...prev, ...newSettings }))
        }
        language={language}
      />
    </div>
  );
}
