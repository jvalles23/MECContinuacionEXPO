import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useCallback, useState } from 'react';
import { FlatList, RefreshControl, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Button from '../components/Button';
import { styles } from '../theme/appTheme';


interface Props extends DrawerScreenProps<any, any> { }

const PacientHome = ({ navigation }: Props) => {
  const [consultas, setConsultas] = useState([
    {
      medico: 'Javier',
      centroSalud: 'Centro Delicias',
      fechaCita: '01/11/2023',
      nombre: 'Alejandro',
      apellido: 'Valles',
      fechaNacimiento: '30/08/2007',
      tarjetaSanitaria: 'AR4567898765467',
      motivoConsulta: 'Dolor de cabeza'
    },
    {
      medico: 'Javier',
      centroSalud: 'Centro Delicias',
      fechaCita: '01/11/2023',
      nombre: 'Alejandro',
      apellido: 'Valles',
      fechaNacimiento: '30/08/2007',
      tarjetaSanitaria: 'AR4567898765467',
      motivoConsulta: 'Revisión'
    },
    {
      medico: 'Javier',
      centroSalud: 'Centro Delicias',
      fechaCita: '01/11/2023',
      nombre: 'Alejandro',
      apellido: 'Valles',
      fechaNacimiento: '30/08/2007',
      tarjetaSanitaria: 'AR4567898765467',
      motivoConsulta: 'Mal estar general'
    },
    {
      medico: 'Javier',
      centroSalud: 'Centro Delicias',
      fechaCita: '01/11/2023',
      nombre: 'Alejandro',
      apellido: 'Valles',
      fechaNacimiento: '30/08/2007',
      tarjetaSanitaria: 'AR4567898765467',
      motivoConsulta: 'Dolor de rodilla'
    },
    {
      medico: 'Javier',
      centroSalud: 'Centro Delicias',
      fechaCita: '01/11/2023',
      nombre: 'Alejandro',
      apellido: 'Valles',
      fechaNacimiento: '30/08/2007',
      tarjetaSanitaria: 'AR4567898765467',
      motivoConsulta: 'Vacunación'
    },
  ]);


  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    console.log('OnRefresh Triggered');
    setRefreshing(true);
    setTimeout(() => {
      console.log('Refresh Completed');
      setRefreshing(false);
    }, 2000);
  }, []);
  const refreshColors = ['#76D7C4'];

  const agregarConsulta = (nuevaConsulta) => {
    setConsultas([...consultas, nuevaConsulta]);
  };

  const eliminarConsulta = (index) => {
    const nuevasConsultas = [...consultas];
    nuevasConsultas.splice(index, 1);
    setConsultas(nuevasConsultas);
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={{
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#76D7C4',
        padding: 10,
        marginTop: 30,
        width: 350,
      }}
      disabled>
      <Text>Médico: {item.medico}</Text>
      <Text>Centro de Salud: {item.centroSalud}</Text>
      <Text>Fecha de Cita: {item.fechaCita}</Text>
      <Button
        label="Acceder a la consulta"
        kind="primary"
        size="lg"
        onPress={() => {
          navigation.navigate('Detail', {
            nombre: item.nombre,
            apellido: item.apellido,
            fechaNacimiento: item.fechaNacimiento,
            tarjetaSanitaria: item.tarjetaSanitaria,
            fechaCita: item.fechaCita,
            motivoConsulta: item.motivoConsulta,
            index: index,
            eliminarConsulta: eliminarConsulta
          });
        }}
        customStyle={{
          width: 250,
          height: 40,
        }}
      />
    </TouchableOpacity>
  );



  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Tus Consultas</Text>
      <Button
        label='Añadir Consulta'
        kind='primary'
        size='md'
        onPress={() => navigation.navigate('AddConsulta', { agregarConsulta })}
        customStyle={{
          padding: 10,
          margin: 5,
          fontWeight: 'normal',
          fontSize: 12,
          marginLeft: -1,
          marginTop: 5,
        }}
        icon='add-circle-outline'
      />
      <FlatList
        data={consultas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={refreshColors}
          />
        }
      />
      <View style={{ height: 50 }} />
    </View>
  );
};

export default PacientHome;