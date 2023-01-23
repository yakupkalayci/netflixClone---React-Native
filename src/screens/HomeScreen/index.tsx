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
import axios from 'axios';

import Icon from 'react-native-vector-icons/Entypo';
import IconInfo from 'react-native-vector-icons/Foundation';

import Header from '../../components/header';
import MovieSection from '../../components/movie-section';

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

  const getRandomImageNumber = () => {
    const random = Math.floor(Math.random() * trendingMovies.day.length) + 1;
    setRandomImage(random);
  };

  useEffect(() => {
    const getTrendingToday = async () => {
      try {
        const {data} = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=6ac941350ec89cb1623346348f0a7b4e`,
        );
        setTrendingMovies({...trendingMovies, day: data.results});
      } catch (error) {
        console.log(error);
      }
    };
    const getTrendingWeek = async () => {
      try {
        const {data} = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=6ac941350ec89cb1623346348f0a7b4e`,
        );
        setTrendingMovies({...trendingMovies, week: data.results});
      } catch (error) {
        console.log(error);
      }
    };
    const getContiuneWatching = async () => {
      try {
        const {data} = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=6ac941350ec89cb1623346348f0a7b4e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878&with_watch_monetization_types=flatrate`,
        );
        setTrendingMovies({...trendingMovies, contiuneWatching: data.results});
      } catch (error) {
        console.log(error);
      }
    };
    getTrendingToday();
    getTrendingWeek();
    getContiuneWatching();
    getRandomImageNumber();
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
            data={trendingMovies.week}
            type="preview"
          />
          <MovieSection
            title="Continue watching for"
            data={trendingMovies.contiuneWatching}
            type="movie"
          />
          <MovieSection
            title="Bugün Popüler"
            data={trendingMovies.day}
            type="movie"
          />
          <MovieSection
            title="Bu Hafta Popüler"
            data={trendingMovies.week}
            type="movie"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
