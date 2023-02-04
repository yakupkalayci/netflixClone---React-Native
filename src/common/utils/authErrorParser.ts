export const authErrorParser = (errMessage: string) => {
  const index = errMessage.indexOf(']', errMessage.indexOf(']'));

  return errMessage.slice(index+2);
};
