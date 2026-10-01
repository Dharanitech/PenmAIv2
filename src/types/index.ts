export type Language = 'ta' | 'en' | 'hi';

export type Category = 
  | 'employment_skills'
  | 'financial_support'
  | 'education'
  | 'entrepreneurship'
  | 'digital_literacy';

export interface DocumentItem {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  howToFind: Record<Language, string>;
  isMandatory: boolean;
}

export interface StepItem {
  stepNumber: number;
  title: Record<Language, string>;
  description: Record<Language, string>;
  audioHint: Record<Language, string>;
}

export interface GovResource {
  id: string;
  category: Category;
  badge: Record<Language, string>;
  name: Record<Language, string>;
  department: Record<Language, string>;
  simpleSummary: Record<Language, string>;
  whyRelevant: Record<Language, string>;
  targetUser: Record<Language, string>;
  eligibility: Record<Language, string[]>;
  documents: DocumentItem[];
  steps: StepItem[];
  officialUrl: string;
  officialPortalName: string;
  disclaimer: Record<Language, string>;
  supportHelpline?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
  audioAvailable?: boolean;
  matchedResourceId?: string;
  quickOptions?: string[];
  iDontKnowHint?: string;
  isQuestion?: boolean;
  stepContext?: string;
}

export interface UserProfileState {
  intent?: 'employment' | 'skills' | 'financial' | 'education' | 'business' | 'general';
  age?: number | string;
  district?: string;
  education?: string;
  workStatus?: string;
  previousEmployment?: string;
  completedQuestions: string[];
}

export interface JargonTerm {
  id: string;
  term: string;
  localizedTerm: Record<Language, string>;
  simpleExplanation: Record<Language, string>;
  realWorldExample: Record<Language, string>;
  audioExplanation: Record<Language, string>;
}

export interface AccessibilitySettings {
  fontSize: 'normal' | 'large' | 'xlarge';
  speechRate: number; // 0.8 to 1.1
  highContrast: boolean;
  autoSpeak: boolean;
}
