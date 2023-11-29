import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { Image, KeyboardAvoidingView, Platform, StyleSheet, TextInput, View } from 'react-native';
import { Text } from 'react-native-elements';
import Button from '../components/Button';
import { colors, styles } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> { }

const RegisterMedic = ({ navigation }: Props) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
    >
      <View style={{ ...styles.globalMargin, marginTop: -50 }}>
        <View style={stylesInput.container}>
          <Image
            source={require('../assets/images/MEC.png')}
            style={stylesInput.image}
          />
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            style={stylesInput.input}
            placeholder="Ingrese su nombre"
            placeholderTextColor={colors.primary}
            keyboardType='default'
            selectionColor='#76D7C4'
            autoCapitalize='none'
            autoCorrect={false}
          />
          <Text style={styles.label}>Apellido</Text>
          <TextInput
            style={stylesInput.input}
            placeholder="Ingrese su apellido"
            placeholderTextColor={colors.primary}
            keyboardType='default'
            selectionColor='#76D7C4'
            autoCapitalize='none'
            autoCorrect={false}
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
            label='Register'
            kind='primary'
            size='lg'
            onPress={() => navigation.navigate('MedicScreen')}
            customStyle={{
              height: 40,
              marginLeft: 15
            }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
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

export default RegisterMedic;
