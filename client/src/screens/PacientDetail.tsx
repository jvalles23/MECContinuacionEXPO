// PacientDetail.js
import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Rows, Table } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';
import { styles } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> { }
const PacientDetail = ({ route, navigation }: Props) => {
  const { paciente } = route.params;

  const tableData = [
    ['Tarjeta Sanitaria', paciente.tarjetaSanitaria],
    ['Fecha de Nacimiento', paciente.fechaNacimiento],
    ['Fecha de la Cita', paciente.fechaCita],
    ['Centro de Salud', paciente.centroSalud],
    ['Motivo Cita', paciente.motivoCita]
  ];

  const navigateToDetallePaciente = () => {
    navigation.navigate('PDFViewer', { paciente });
  };

  return (
    <View style={{ ...styles.globalMargin, paddingTop: 100 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name='chevron-back-outline' size={40} color='#76D7C4' />
        </TouchableOpacity>

        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../assets/images/profile.png')}
            style={{ width: 90, height: 90, borderRadius: 20, marginBottom: 10 }}
          />
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{`${paciente.nombre} ${paciente.apellido}`}</Text>
        </View>

        <View style={{ width: 50 }} />
      </View>

      <Table borderStyle={{ borderWidth: 1, borderRadius: 10, borderColor: '#76D7C4' }}>
        <Rows data={tableData} style={{ width: 388, height: 60 }} textStyle={{ margin: 6 }} />
      </Table>
      <Button
        label='Crear justificante'
        kind='primary'
        size='lg'
        onPress={navigateToDetallePaciente}
        customStyle={{
          marginLeft: -8,
          height: 40,
          backgroundColor: 'red' // Cambia el color según tu estilo
        }}
      />
    </View>
  );
};

PacientDetail.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ marginLeft: 10 }}
    >
      <Icon name='chevron-back-outline' size={30} color='#76D7C4' />
    </TouchableOpacity>
  ),
});

export default PacientDetail;
