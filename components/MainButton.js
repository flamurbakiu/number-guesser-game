import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';

const MainButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.6}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 20,
  },

  buttonText: {
    color: 'white',
    fontFamily: 'open-sans',
    fontSize: 15,
  },
});

export default MainButton;
