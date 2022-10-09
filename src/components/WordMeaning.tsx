import React from 'react';
import { v4 as uuid } from 'uuid';
import { Card, CardContent, Typography } from '@mui/material';
import Definition from './Definition';
import { MeaningItem } from '../types/word';

type Props = {
  meaning: MeaningItem;
};

function WordMeaning({ meaning }: Props) {
  return (
    <Card sx={{ mt: 1 }} variant="outlined">
      <CardContent>
        <Typography variant="h6">Part of speech:</Typography>
        <Typography variant="body1">{meaning.partOfSpeech}</Typography>

        {meaning.definitions?.length > 0 && (
          <>
            <Typography variant="h6">Definitions:</Typography>
            {meaning.definitions.map((definition) => (
              <Definition definition={definition} key={uuid()} />
            ))}
          </>
        )}

        {meaning.synonyms?.length > 0 && (
          <>
            <Typography variant="h6">Synonyms:</Typography>
            <Typography variant="body1">
              {meaning.synonyms.join(', ')}
            </Typography>
          </>
        )}
        {meaning.antonyms?.length > 0 && (
          <>
            <Typography variant="h6">Antonyms:</Typography>
            <Typography variant="body1">
              {meaning.antonyms.join(', ')}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default WordMeaning;
