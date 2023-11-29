import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import Button from '../components/Button';
import { colors, styles } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> { }

const MedicScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <View style={stylesInput.container}>
        <Image
          source={require('../assets/images/MEC.png')}
          style={stylesInput.image}
        />
        <Text style={styles.label}>Num.Colegiado</Text>
        <TextInput
          style={stylesInput.input}
          placeholder="Ingrese su numero de colegiado"
          placeholderTextColor={colors.primary}
          keyboardType='default'
          selectionColor='#76D7C4'
          autoCapitalize='none'
          autoCorrect={false}
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={stylesInput.input}
          placeholder="*******"
          placeholderTextColor={colors.primary}
          selectionColor='#76D7C4'
          autoCapitalize='none'
          autoCorrect={false}
        />
        <Button
          label='Login'
          kind='primary'
          size='lg'
          onPress={() => navigation.navigate('MedicHome')}
          customStyle={{
            height: 40,
            marginLeft: 15
          }}
        />
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Text>¿Todavía no te has registrado?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterMedic')}
          >
            <Text style={{ color: '#76D7C4' }}>Registrate!!!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const stylesInput = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    marginBottom: 10,
    paddingBottom: 4,
    color: colors.primary,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    marginBottom: 16,
  },
});

export default MedicScreen;
