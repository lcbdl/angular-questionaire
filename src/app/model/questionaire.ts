export interface Questionaire {
  resourceType: string;
  id: string;
  url: string;
  status: string;
  subjectType: string[];
  date: string;
  item: QuestionaireItem[];
}

export enum QuestionaireItemType {
  STRING = 'string',
  CHOICE = 'choice',
  DATE = 'date',
  BOOLEAN = 'boolean',
}

export interface QuestionaireItem {
  linkId: string;
  text: string;
  type: QuestionaireItemType;
  option?: ChoiceOption[];
}

export interface ChoiceOption {
  valueCoding: ValueCoding;
}

export interface ValueCoding {
  system: string;
  code: string;
  display: string;
}

export interface Answer {
  linkId: string;
  text: string;
  type: QuestionaireItemType;
  answer: any;
}
