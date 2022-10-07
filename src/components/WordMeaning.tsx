import React from 'react';
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
              <Definition definition={definition} />
            ))}
          </>
        )}

        {meaning.synonyms?.length > 0 && (
          <Typography variant="body1">
            {`Synonyms: ${meaning.synonyms.join(', ')}.`}
          </Typography>
        )}
        {meaning.antonyms?.length > 0 && (
          <Typography variant="body1">
            {`Antonyms: ${meaning.antonyms.join(', ')}.`}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default WordMeaning;