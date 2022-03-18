import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen = () => {
  const greeting = <Text style={styles.greetStyle}>My name is Jonathan!</Text>;
  
  return (
  <View>
    <Text style={styles.textStyle} >Getting started with React Native!</Text>
    {greeting}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40
  },
  greetStyle: {
    fontSize: 25
  }
});

export default ComponentScreen;