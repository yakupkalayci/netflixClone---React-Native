// Import React
import { Image, ImageStyle } from 'react-native';

interface MainImageProps {
  dailyTrendingMovies: any;
  randomImageIndex: number;
  style: ImageStyle;
}

function MainImage(props: MainImageProps): JSX.Element {
  // destructp props
  const { dailyTrendingMovies, randomImageIndex, style } = props;

  return (
    <Image
      source={{
        uri: dailyTrendingMovies
          ? 'https://image.tmdb.org/t/p/w500' + dailyTrendingMovies[randomImageIndex]?.poster_path
          : ''
      }}
      style={style}
      resizeMode={'contain'}
    />
  );
}

export default MainImage;
