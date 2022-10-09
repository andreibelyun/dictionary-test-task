import { Word } from '../types/word';

const apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export function getWord(word: string): Promise<Word[]> {
  return fetch(`${apiUrl}/${word}`).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(`Response is not ok with status ${res.status}`);
  });
}
