import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Matheus', age: '\nAge: 25'} ,
    { name: 'Ben', age: '\nAge: 22'},
    { name: 'Nathaly', age: '\nAge: 21'},
    { name: 'Rai', age: '\nAge: 17'},
    { name: 'Martha', age: '\nAge: 18'},
    { name: 'Ferdinand', age: '\nAge: 28'},
    { name: 'Karl Von Batte', age: '\nAge: 16'},
    { name: 'David', age: '\nAge: 32'}
  ];
  return <FlatList 
    showsVerticalScrollIndicator={false}
    keyExtractor = {(friend) => (friend.name)}
    data= {friends}
    renderItem={({item}) =>{
      return <Text style = {styles.textStyle}>{item.name} {item.age}</Text>;
    }}
   />
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 35
  }
});

export default ListScreen;