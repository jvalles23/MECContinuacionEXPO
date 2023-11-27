import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { Image, Text, View } from 'react-native';
import Button from '../components/Button';
import { styles } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> { }

const Profile = ({ navigation }: Props) => {
  const goLogout = () => {
    // Agrega aquí la lógica para cerrar sesión
  };

  return (
    <View style={styles.globalMargin}>
      <Image
        source={require('../assets/images/MEC.png')} // Ruta de la imagen de perfil
        style={{
          width: 200,
          height: 200,
          marginBottom: 25,
          marginRight: 290,
          marginTop: -50,
        }}
      />
      <Image
        source={require('../assets/images/profile.png')} // Ruta de la imagen de perfil
        style={{ width: 200, height: 200, marginBottom: 20 }}
      />
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Nombre de Usuario</Text>
      <Button
        label="Logout"
        kind="primary"
        customStyle={{
          backgroundColor: 'red',
          width: 150,
          marginLeft: -5
        }}
        onPress={() => navigation.navigate('SelectionScreen')}
      />
    </View>
  );
};
export default Profile;
