import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AddConsulta from '../screens/AddConsulta';
import DetailConsulta from '../screens/DetailConsulta';
import EditConsulta from '../screens/EditConsulta';
import MedicScreen from '../screens/MedicScreen';
import PDFViewer from '../screens/PDFViewer';
import PacientDetail from '../screens/PacientDetail';
import PacientScreen from '../screens/PacientScreen';
import RegisterMedic from '../screens/RegisterMedic';
import RegisterPacient from '../screens/RegisterPacient';
import SelectionScreen from '../screens/SelectionScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import { BottomTabs } from './BottomTabs';
import { BottomTabsMed } from './BottomTabsMed';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="SelectionScreen" component={SelectionScreen} />
      <Stack.Screen name="RegisterMedic" component={RegisterMedic} />
      <Stack.Screen name="MedicScreen" component={MedicScreen} />
      <Stack.Screen name="MedicHome" component={BottomTabsMed} />
      <Stack.Screen name="PacientDetail" component={PacientDetail} />
      <Stack.Screen name="RegisterPacient" component={RegisterPacient} />
      <Stack.Screen name="PacientScreen" component={PacientScreen} />
      <Stack.Screen name="PacientHome" component={BottomTabs} />
      <Stack.Screen name="Detail" component={DetailConsulta} />
      <Stack.Screen name="AddConsulta" component={AddConsulta} />
      <Stack.Screen name="EditConsulta" component={EditConsulta} />
      <Stack.Screen name="PDFViewer" component={PDFViewer} />
    </Stack.Navigator>
  );
};
