import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any, any> { }
const SelectionScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.medicButton]}
        onPress={() => navigation.navigate('MedicScreen')}>
        <Icon name="medkit" size={40} color="white" />
        <Text style={styles.buttonText}>Médico</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.pacientButton]}
        onPress={() => navigation.navigate('PacientScreen')}>
        <Icon name="person" size={40} color="white" />
        <Text style={styles.buttonText}>Paciente</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    width: 150,
    height: 100,
  },
  medicButton: {
    backgroundColor: '#76D7C4',
  },
  pacientButton: {
    backgroundColor: 'orange',
  },
  buttonText: {
    color: 'white',
    marginTop: 5,
  },
});

export default SelectionScreen;
