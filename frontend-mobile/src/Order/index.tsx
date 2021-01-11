import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert } from 'react-native';
import Header from '../Header';
import OrderCard from './OrderCard';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrder } from '../Services/api';
import { Order } from './types';
import { useNavigation, useIsFocused } from '@react-navigation/native';


function Orders() {

  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  
  const fetchData = () => {
    setIsLoading(true);
    fetchOrder()
      .then(resp => setOrders(resp.data))
      .catch(error => Alert.alert('Houve um erro ao consultar a API de pedidos'))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    if(isFocused){
      fetchData();
    }
  }, [isFocused])

  const handleOnPress = (order: Order) => {
    navigation.navigate('OrderDetails', {
        order
    })
  }

  return (
    <>
      <Header/>
      <ScrollView style={styles.container}>
         {isLoading ? (<Text>Buscando pedidos...</Text>) : 
          (orders.map(order => (
              <TouchableWithoutFeedback 
                key={order.id} 
                onPress={() => handleOnPress(order)}
              >

              <OrderCard order={order} />
              </TouchableWithoutFeedback> 
          ))
         )}
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


export default Orders;
