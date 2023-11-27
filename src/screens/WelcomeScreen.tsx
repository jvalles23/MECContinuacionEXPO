import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect } from 'react';
import { Image, StatusBar, StyleSheet, View } from 'react-native';
import BackGround from './BackGround';

interface Props extends DrawerScreenProps<any, any> { }

const WelcomeScreen = ({ navigation }: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navegar a la pantalla 'SelectionScreen' después de 3 segundos
      navigation.navigate('SelectionScreen');
    }, 3000);

    // Limpiar el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <>
      <BackGround />
      <StatusBar backgroundColor="#76D7C4" barStyle="dark-content" />
      <View style={{ marginTop: 200, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../assets/images/MEC.png')} style={{ width: 500, height: 320 }} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    color: '#76D7C4',
  },
});

export default WelcomeScreen;
