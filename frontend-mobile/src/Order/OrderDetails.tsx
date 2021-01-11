import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert, Linking } from 'react-native';
import Header from '../Header';
import { Order } from './types';
import { dateFromNow, formatPrice } from '../Helpers'
import OrderCard from './OrderCard';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { confirmDelivery } from '../Services/api';

type Props ={
    route: {
        params: {
            order: Order;
        }
    }
}

function OrderDetails({ route }: Props) {

    const { order } = route.params;

    const navigation = useNavigation();

    const handlerOnCancel = () => {
        navigation.navigate('Orders');
    }
    
    const handlerConfirmDelivery = () => {
        confirmDelivery(order.id)
            .then(() => {
                Alert.alert(`Pedido ${order.id} confirmado com sucesso!`);
                navigation.navigate('Orders');
            })
            .catch(() => {
                Alert.alert(`Houve um erro ao confirmar o pedido ${order.id}`);
            })
    }

    const handleStartNavigation = () => {
        console.log('===>', order)
        Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`);
    }
    
    

  return (
    <>
      <Header/>
      <View style={styles.container}>
        <OrderCard order={order} />
        <RectButton style={styles.button} onPress={handleStartNavigation}>
            <Text style={styles.buttonText}> Iniciar navegação </Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handlerConfirmDelivery}>
            <Text style={styles.buttonText}> Confirmar entrega </Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handlerOnCancel}>
            <Text style={styles.buttonText}>Cancelar </Text>
        </RectButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%'
      },
      button: {
        backgroundColor: '#DA5C5C',
        flexDirection: 'row',
        borderRadius: 10,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
      },
      buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
        letterSpacing: -0.24,
        fontFamily: 'OpenSans_700Bold'
      }
});


export default OrderDetails;
