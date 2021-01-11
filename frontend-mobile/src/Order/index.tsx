import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import Header from '../Header';
import OrderCard from './OrderCard';
import { ScrollView } from 'react-native-gesture-handler';

function Order() {

  return (
    <>
      <Header/>
      <ScrollView style={styles.container}>
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
      </ScrollView>
    </>

  );
}

const styles = StyleSheet.create({
   container: {
     paddingRight: '5%',
     paddingLeft: '5%',
   }
});


export default Order;
