// Import React
import { View, Image, ImageStyle, ViewStyle } from 'react-native';

interface MainImageProps {
  dailyTrendingMovies: any;
  randomImageIndex: number;
  imgStyle: ImageStyle;
  viewStyle: ViewStyle
}

function MainImage(props: MainImageProps): JSX.Element {
  // destructp props
  const { dailyTrendingMovies, randomImageIndex, imgStyle, viewStyle } = props;

  return (
    <View style={viewStyle}>
      <Image
        source={{
          uri: dailyTrendingMovies
            ? 'https://image.tmdb.org/t/p/w500' + dailyTrendingMovies[randomImageIndex]?.poster_path
            : ''
        }}
        style={imgStyle}
        resizeMode={'contain'}
      />
    </View>
  );
}

export default MainImage;
