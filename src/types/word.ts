export type PhonecicItem = {
  text: string;
  audio?: string;
};

export type DefinitionItem = {
  definition: string;
  example?: string;
  synonyms: string[];
  antonyms: string[];
};

export type MeaningItem = {
  partOfSpeech: string;
  definitions: DefinitionItem[];
  synonyms: string[];
  antonyms: string[];
};

export type Word = {
  word: string;
  phonetic: string;
  phonetics: PhonecicItem[];
  origin?: string;
  meanings: MeaningItem[];
};
