import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {DrawerScreenProps} from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any> {}
export const OnBoardingScreen = ({navigation}: Props) => {
  return (
    <Onboarding
      onSkip={() => ''}
      onDone={() => navigation.navigate('LoginScreen')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: require('../assets/onboarding/onboarding-img1.png'),
          title: 'MEC',
          subtitle:
            'La aplicacion puntera en nuestro sector, el de salud el mas importante',
        },
        {
          backgroundColor: '#fdeb93',
          image: require('../assets/onboarding/onboarding-img2.png'),
          title: 'MEC',
          subtitle:
            'Deja de esperar con nuestra aplicacion y solicita consultas al instante',
        },
        {
          backgroundColor: '#e9bcbe',
          image: require('../assets/onboarding/onboarding-img3.png'),
          title: 'MEC',
          subtitle: 'Deja de esperar es tu app',
        },
      ]}
    />
  );
};
