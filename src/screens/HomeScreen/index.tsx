import React, {useEffect} from 'react';
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
import PreviewCard from '../../components/preview-card';

import {HomeScreenProps} from '../screenTypes';

import styles from './style';

function Home({route, navigation}: HomeScreenProps): JSX.Element {
  // const {userName} = route.params;

  // useEffect(() => {
  //   Alert.alert(`Hoşgeldin, ${userName}`);
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/jaws.jpg')}
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
          <Text style={styles.titles}>Previews</Text>
          <ScrollView horizontal={true}>
            <PreviewCard type="preview" imgName="americanGangster" />
            <PreviewCard type="preview" imgName="blackPanther" />
            <PreviewCard type="preview" imgName="breakingBad" />
            <PreviewCard type="preview" imgName="guardiansVol" />
            <PreviewCard type="preview" imgName="starWars" />
            <PreviewCard type="preview" imgName="theDarkKnight" />
          </ScrollView>
          <Text style={styles.titles}>Continue watching for </Text>
          <ScrollView horizontal={true}>
            <PreviewCard type="movie" imgName="deadpool" />
            <PreviewCard type="movie" imgName="gWillHunting" />
            <PreviewCard type="movie" imgName="jMulaneyKidGorgeous" />
            <PreviewCard type="movie" imgName="meanGirls" />
            <PreviewCard type="movie" imgName="moonlight" />
          </ScrollView>
          <Text style={styles.titles}>Continue watching for</Text>
          <ScrollView horizontal={true}>
            <PreviewCard type="movie" imgName="deadpool" />
            <PreviewCard type="movie" imgName="gWillHunting" />
            <PreviewCard type="movie" imgName="jMulaneyKidGorgeous" />
            <PreviewCard type="movie" imgName="meanGirls" />
            <PreviewCard type="movie" imgName="moonlight" />
          </ScrollView>
          <Text style={styles.titles}>Continue watching for</Text>
          <ScrollView horizontal={true}>
            <PreviewCard type="movie" imgName="deadpool" />
            <PreviewCard type="movie" imgName="gWillHunting" />
            <PreviewCard type="movie" imgName="jMulaneyKidGorgeous" />
            <PreviewCard type="movie" imgName="meanGirls" />
            <PreviewCard type="movie" imgName="moonlight" />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
