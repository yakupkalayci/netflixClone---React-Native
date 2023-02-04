import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#222222',
    flex: 1
  },
  innerContainer: {
    padding: 20,
  },
  videoContainer: {
    height: 270
  },
  video: {
    width: '100%',
    height: '100%'
  },
  text: {
    color: '#fff'
  },
  movieDetails: {
    marginTop: 10
  },
  upperDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  upperLeft: {
    justifyContent: 'space-between',
    height: 50
  },
  voteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 50
  },
  voteText: {
    fontSize: 16,
    color: '#D9d9d9',
    fontWeight: 'bold'
  },
  genreText: {
    fontSize: 16,
    color: '#D9d9d9',
    fontWeight: 'bold'
  },
  describtionText: {
    fontSize: 17,
    color: '#D9d9d9'
  },
  added: {
    color: 'green'
  },
  actionButton: {
    alignItems: 'center'
  }
});
