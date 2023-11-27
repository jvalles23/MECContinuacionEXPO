import { NavigationContainer } from '@react-navigation/native';
import * as Location from 'expo-location';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { Navigator } from './src/navigation/Navigator';

const App = () => {

  useEffect(() => {
    (async () => {
      // Solicitar permisos de ubicación
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permiso de ubicación denegado');
        return;
      }

      // Acceder a la ubicación del dispositivo
      let location = await Location.getCurrentPositionAsync({});
      console.log('Ubicación actual:', location);
    })();
  }, []);

  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;