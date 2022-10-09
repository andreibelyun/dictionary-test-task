import React from 'react';
import { v4 as uuid } from 'uuid';
import { Card, CardContent, Typography, Box } from '@mui/material';
import WordMeaning from './WordMeaning';
import { Word } from '../types/word';

type Props = {
  word: Word;
};

function WordCard({ word }: Props) {
  return (
    <article>
      <Card
        sx={{ m: '0 auto', mb: 2, width: { xs: '100%', sm: '80%', md: '60%' } }}
      >
        <CardContent>
          <Typography variant="h4" component="h4">
            {word.word}
          </Typography>

          <Typography
            variant="h5"
            component="p"
            color="text.secondary"
            gutterBottom
          >
            {`(${word.phonetic})`}
          </Typography>

          {word.phonetics && (
            <Typography variant="h6" sx={{ mb: 2 }}>
              Phonetics:
            </Typography>
          )}

          {word.phonetics?.length > 0 &&
            word.phonetics.map((phonetic) => (
              <Box key={uuid()} sx={{ width: { xs: '100%', sm: '60%', md: '50%' } }}>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{ ml: '10px', mb: '10px' }}
                >
                  {phonetic.text}
                </Typography>
                {phonetic.audio && (
                  <audio controls autoPlay={false} style={{ width: '100%' }}>
                    <source src={phonetic.audio} type="audio/mpeg" />
                  </audio>
                )}
              </Box>
            ))}

          {word.origin && (
            <>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Origin:
              </Typography>

              <Typography variant="body1" color="text.secondary">
                {word.origin}
              </Typography>
            </>
          )}

          {word.meanings &&
            word?.meanings.map((meaning) => (
              <WordMeaning meaning={meaning} key={uuid()} />
            ))}
        </CardContent>
      </Card>
    </article>
  );
}

export default WordCard;
