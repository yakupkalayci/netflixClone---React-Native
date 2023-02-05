import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop:10,
    paddingBottom: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: 'rgb(79, 86, 92)',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  image: {
    width: 140,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'cover',
  },
  removeButton: {
    backgroundColor: 'gray',
    borderRadius: 8,
    marginTop: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  innerContainer: {
    paddingLeft: 15,
    paddingRight: 150
  },
  title: {
    color: 'gray',
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 25,
  },
  vote: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  voteText: {
    color: 'gray',
    marginLeft: 5,
  },
  genre: {
    color: 'gray',
    marginTop: 5,
    marginBottom: 5,
  },
  description: {
    color: 'gray',
    fontSize: 15,
  },
});
