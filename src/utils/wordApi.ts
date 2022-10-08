const apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const chechResponse = (res: any) => {
  if (res.ok) {
    return res.json();
  }
  throw new Error(`Response is not ok with status ${res.status}`);
};

export const getWord = (word: any) => fetch(apiUrl + word).then(chechResponse);
