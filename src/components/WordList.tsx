import React from 'react';
import { v4 as uuid } from 'uuid';
import WordCard from './WordCard';
import { useAppSelector } from '../utils/hooks';

function WordList() {
  const words = useAppSelector((state) => state.words);

  return (
    <section>
      {words.words.map((word) => (
        <WordCard word={word} key={uuid()} />
      ))}
    </section>
  );
}

export default WordList;
