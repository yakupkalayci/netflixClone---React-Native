export const getRandomImageIndex = (
  movies: any,
  setRandomImageIndex: React.Dispatch<React.SetStateAction<number>>
): void => {
  const random = Math.floor(Math.random() * movies?.length) + 1;

  setRandomImageIndex(random);
};
