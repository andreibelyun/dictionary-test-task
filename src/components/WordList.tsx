import React from 'react';
import WordCard from './WordCard';

const words = [
  {
    word: 'whale',
    phonetic: '/weɪl/',
    phonetics: [
      {
        text: '/weɪl/',
        audio:
          'https://api.dictionaryapi.dev/media/pronunciations/en/whale-us.mp3',
        sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=623343',
        license: {
          name: 'BY-SA 3.0',
          url: 'https://creativecommons.org/licenses/by-sa/3.0'
        }
      }
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'Any of several species of large sea mammals of the infraorder Cetacea.',
            synonyms: [],
            antonyms: []
          },
          {
            definition: 'Something, or someone, that is very large.',
            synonyms: [],
            antonyms: []
          },
          {
            definition: 'Something, or someone, that is excellent.',
            synonyms: [],
            antonyms: []
          },
          {
            definition:
              'In a casino, a person who routinely bets at the maximum limit allowable.',
            synonyms: [],
            antonyms: []
          },
          {
            definition:
              'An investor who deals with very large amounts of money.',
            synonyms: [],
            antonyms: []
          },
          {
            definition:
              '(by extension) A video game player who spends large amounts of money on premium content.',
            synonyms: [],
            antonyms: []
          }
        ],
        synonyms: [],
        antonyms: []
      },
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition: 'To hunt for whales.',
            synonyms: [],
            antonyms: []
          }
        ],
        synonyms: [],
        antonyms: []
      }
    ],
    license: {
      name: 'CC BY-SA 3.0',
      url: 'https://creativecommons.org/licenses/by-sa/3.0'
    },
    sourceUrls: ['https://en.wiktionary.org/wiki/whale']
  },
  {
    word: 'whale',
    phonetic: '/weɪl/',
    phonetics: [
      {
        text: '/weɪl/',
        audio:
          'https://api.dictionaryapi.dev/media/pronunciations/en/whale-us.mp3',
        sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=623343',
        license: {
          name: 'BY-SA 3.0',
          url: 'https://creativecommons.org/licenses/by-sa/3.0'
        }
      }
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition: 'To thrash, to flog, to beat vigorously or soundly.',
            synonyms: [],
            antonyms: []
          }
        ],
        synonyms: [],
        antonyms: []
      }
    ],
    license: {
      name: 'CC BY-SA 3.0',
      url: 'https://creativecommons.org/licenses/by-sa/3.0'
    },
    sourceUrls: ['https://en.wiktionary.org/wiki/whale']
  }
];

function WordList() {
  return (
    <section>
      {words.map((word) => (
        <WordCard word={word} />
      ))}
    </section>
  );
}

export default WordList;