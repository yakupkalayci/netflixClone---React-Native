export const getRandomImageIndex = (movies: any): number => {
  const random = Math.floor(Math.random() * movies?.length) + 1;

  return random;
};
