import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Login(): JSX.Element {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/coffeebg.png')}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
