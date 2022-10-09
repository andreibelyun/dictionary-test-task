import React from 'react';
import WordCard from './WordCard';
import { useAppSelector } from '../utils/hooks';

function WordList() {
  const words = useAppSelector((state) => state.words);

  return (
    <section>
      {words.words.map((word) => (
        <WordCard word={word} />
      ))}
    </section>
  );
}

export default WordList;
