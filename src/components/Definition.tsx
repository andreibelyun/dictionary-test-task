import React from 'react';
import { Typography } from '@mui/material';
import { DefinitionItem } from '../types/word';

type Props = {
  definition: DefinitionItem;
};

function Definition({ definition }: Props) {
  return (
    <div>
      {definition.definition && (
        <Typography variant="body1">{`- ${definition.definition}`}</Typography>
      )}
      {definition.example && (
        <Typography variant="body2">{`(For example: ${definition.example})`}</Typography>
      )}
      {definition.synonyms?.length > 0 && (
        <Typography variant="body2">
          {`Synonyms: ${definition.synonyms.join(', ')}.`}
        </Typography>
      )}
      {definition.antonyms?.length > 0 && (
        <Typography variant="body2">
          {`Antonyms: ${definition.antonyms.join(', ')}.`}
        </Typography>
      )}
    </div>
  );
}

export default Definition;
