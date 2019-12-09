export const getStage = () => {
  if (window.location.hostname === 'localhost') {
    return 'http://localhost:3333'
  } else {
    return window.location.protocol + '//' + window.location.hostname;
  }
};

export const getFile = (textFileName: string): Promise<any> => {
  return fetch(getStage() + '/assets/config/' + textFileName)
    .then((response: Response) => response.json());
};
