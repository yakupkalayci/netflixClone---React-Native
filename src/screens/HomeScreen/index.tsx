import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import IconInfo from 'react-native-vector-icons/Foundation';

import Header from '../../components/header';
import MovieSection from '../../components/movie-section';

import {
  getTrendingToday,
  getTrendingWeek,
  getContiuneWatching,
} from '../../services/actions/fetchMovies';

import {getRandomImageNumber} from '../../utils/getRandomImageNumber';

import styles from './style';

export type TrendingMoviesObjectType = {
  day: [];
  week: [];
  contiuneWatching: [];
};

function HomeScreen(): JSX.Element {
  const [trendingMovies, setTrendingMovies] =
    useState<TrendingMoviesObjectType>({
      day: [],
      week: [],
      contiuneWatching: [],
    });
  const [randomImage, setRandomImage] = useState<number>(0);


  useEffect(() => {
    getTrendingToday(trendingMovies, setTrendingMovies);
    getTrendingWeek(trendingMovies, setTrendingMovies);
    getContiuneWatching(trendingMovies, setTrendingMovies);
    getRandomImageNumber(trendingMovies, setRandomImage);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:
                'https://image.tmdb.org/t/p/w500' +
                trendingMovies.day[randomImage]?.poster_path,
            }}
            style={styles.mainPoster}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="plus" size={30} color="#fff" />
            <Text style={styles.actionText}>My List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, styles.actionButtonPlay]}>
            <Icon name="controller-play" size={30} color="#000" />
            <Text style={[styles.actionText, styles.actionButtonPlayText]}>
              Play
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <IconInfo name="info" size={30} color="#fff" />
            <Text style={styles.actionText}>Info</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.innerContainer}>
          <MovieSection
            title="Previews"
            data={trendingMovies?.week}
            type="preview"
          />
          <MovieSection
            title="Continue watching for"
            data={trendingMovies?.contiuneWatching}
            type="movie"
          />
          <MovieSection
            title="Bugün Popüler"
            data={trendingMovies?.day}
            type="movie"
          />
          <MovieSection
            title="Bu Hafta Popüler"
            data={trendingMovies?.week}
            type="movie"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
