// Import React
import { View, Text, ViewStyle, TextStyle } from 'react-native';

interface HeaderProps {
    headerStyle: ViewStyle;
    titleStyle: TextStyle;
    genreStyle: TextStyle;
    title: string;
    genre: string | undefined;
}

function Header(props: HeaderProps): JSX.Element {
    // destruct props
    const { headerStyle, titleStyle, genreStyle, title, genre } = props;

    return (
        <View style={headerStyle}>
        <View>
          <Text style={titleStyle} numberOfLines={1}>
            {title}
          </Text>
          <Text style={genreStyle}>{genre}</Text>
        </View>
      </View> 
    );
}

export default Header;