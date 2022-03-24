import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, TextInput } from 'react-native';

const TextScreen = () =>{
  const [password, setPassword] = useState('');
  return (
    <View>
      <Text style = {styles.text}>Enter Password: </Text>
      <TextInput 
        style = {styles.input}
        autoCapitalize = "none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 4 ? <Text>Password must be at least for characters</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
  fontSize: 25,
  margin: 15,
  borderColor: 'black',
  borderWidth: 1
  },
  text: {
    fontSize: 25
  }
});

export default TextScreen;