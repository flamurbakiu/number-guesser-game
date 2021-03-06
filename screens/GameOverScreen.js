import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.png')}
          // source={{uri: 'https://storage.googleapis.com/stateless-www-knowkpop-com/2020/02/cbf3d598-whatissuccess-1024x682-1.jpg'}}
          style={styles.image}
          resizeMode='cover'
        />
      </View>
      <BodyText style={styles.textContainer}>
        Your phone needed{' '}
        <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
        guess the number{' '}
        <Text style={styles.highlight}>{props.userNumber}</Text>.
      </BodyText>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    padding: 20,
    fontSize: 15,
    textAlign: 'center',
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
});

export default GameOverScreen;
