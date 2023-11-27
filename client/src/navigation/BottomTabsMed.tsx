import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MedicHome from '../screens/MedicHome';
import Profile from '../screens/Profile';
import { colors } from '../theme/appTheme';

export const BottomTabsMed = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const getScreenOptions = route => {
  return {
    headerShown: false,
    tabBarActiveTintColor: colors.primary,
    tabBarStyle: {
      borderTopColor: colors.primary,
      borderTopWidth: 0,
      elevation: 0,
    },
    tabBarLabelStyle: {
      fontSize: 15,
    },
    tabBarIcon: ({ color, focused }) => {
      let iconName = ' ';
      switch (route.name) {
        case 'MedicHome':
          iconName = 'home-outline';
          break;
        case 'Profile':
          iconName = 'person-circle-outline';
          break;
      }

      return <Icon name={iconName} size={20} color={color} />;
    },
  };
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colors.primary,
      }}
      screenOptions={({ route }) => getScreenOptions(route)}>
      <BottomTabAndroid.Screen name="MedicHome" options={{ title: 'Inicio' }} component={MedicHome} />
      <BottomTabAndroid.Screen
        name="Profile"
        options={{ title: 'Perfil' }}
        component={Profile}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={({ route }) => getScreenOptions(route)}>
      <BottomTabIOS.Screen name="MedicHome" options={{ title: 'Inicio' }} component={MedicHome} />
      <BottomTabIOS.Screen
        name="Profile"
        options={{ title: 'Perfil' }}
        component={Profile}
      />
    </BottomTabIOS.Navigator>
  );
};
