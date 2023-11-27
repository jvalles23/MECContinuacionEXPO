import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';
import { styles } from '../theme/appTheme';
import { mapStyle } from '../theme/mapStyle';
import { MARKERS_DATA } from '../components/MarkersData';
import { Image } from 'react-native';

interface Props extends DrawerScreenProps<any, any> { }

const DetailConsulta = ({ navigation, route }: Props) => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerPress = (marker) => {
    console.log('Marker pressed:', marker);
    setSelectedMarker(marker);
  };

  const handleCloseModal = () => {
    setSelectedMarker(null);
  };

  const { nombre, apellido, tarjetaSanitaria, fechaCita, motivoConsulta } = route.params;
  const { paciente } = route.params;

  const [showAlert, setShowAlert] = useState(false);

  // Función para mostrar una alerta aleatoria personalizada
  const showRandomAlert = () => {
    const shouldShowAlert = Math.random() < 0.5; // Probabilidad del 50%
    setShowAlert(shouldShowAlert);
  };

  useEffect(() => {
    showRandomAlert();
  }, []);

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

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={refreshColors}
        />
      }
    >
      <View style={styles.globalMargin}>
        <View style={stylesIntern.card}>
          <Text>Nombre: {nombre}</Text>
          <Text>Apellido: {apellido}</Text>
          <Text>Tarjeta Sanitaria: {tarjetaSanitaria}</Text>
          <Text>Fecha Cita: {fechaCita}</Text>
          <Text>Motivo Consulta: {motivoConsulta}</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={stylesIntern.buttonContainer}>
              <Button
                label='Editar Consulta'
                kind='primary_outline'
                size='md'
                onPress={() => navigation.navigate('EditConsulta', {
                  nombre,
                  apellido,
                  tarjetaSanitaria,
                  fechaCita,
                  motivoConsulta
                })}
                customStyle={{
                  fontWeight: 'normal',
                  fontSize: 12,
                  marginLeft: 30,
                  marginTop: 5
                }}
              />
              <Button
                label='Eliminar'
                kind='primary'
                size='md'
                onPress={() => navigation.navigate('PacientHome')}
                customStyle={{
                  backgroundColor: 'red',
                  padding: 10,
                  margin: 5,
                  fontWeight: 'normal',
                  fontSize: 12,
                  marginLeft: 30,
                  marginTop: 5
                }}
              />
            </View>
            <TouchableOpacity
              style={{ marginLeft: 10, marginTop: -100 }}
              onPress={() => navigation.navigate('PDFViewer', { paciente })}
            >
              <Icon name='document-outline' size={30} color='#76D7C4' />
              <Text style={{ color: '#76D7C4' }}>PDF</Text>
            </TouchableOpacity>
          </View>
        </View>
        {showAlert && (
          <View style={stylesIntern.alertContainer}>
            <View style={stylesIntern.alertContent}>
              <Icon name='warning-outline' size={60} color='red' />
              <Text style={stylesIntern.alertText}>
                El médico no está disponible en este centro de salud.
                Consulte los marcadores del mapa para saber a qué centro de salud acudir.
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => setShowAlert(false)}
              style={stylesIntern.alertButton}
            >
              <Text style={stylesIntern.alertButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={{ height: 120 }} />

        <View style={stylesIntern.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={stylesIntern.mapStyle}
            initialRegion={{
              latitude: 41.64911,
              longitude: -0.888503,
              latitudeDelta: 0.003,
              longitudeDelta: 0.003,
            }}
            mapType="standard"
          >
            {MARKERS_DATA.map((marker) => (
              <Marker
                key={marker.id}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
                onPress={() => handleMarkerPress(marker)}
              ></Marker>
            ))}
          </MapView>

          {/* Modal para mostrar información del marcador */}
          <Modal
            visible={selectedMarker !== null}
            animationType="slide"
            transparent={true}
            onRequestClose={handleCloseModal}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                <Image
                  source={selectedMarker?.imageRequire}
                  style={{ width: 350, height: 300, borderRadius: 5, marginTop: 10 }}
                />
                <Text>Nombre: {selectedMarker?.name}</Text>
                <Text>Dirección: {selectedMarker?.direction}</Text>
                <TouchableOpacity onPress={handleCloseModal}>
                  <Text style={{ color: 'blue', marginTop: 10 }}>Cerrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
        <View style={{ height: 100 }} />
      </View>
    </ScrollView>
  );
};

const stylesIntern = StyleSheet.create({
  card: {
    width: 350,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#76D7C4',
    marginTop: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 5,
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  alertContainer: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#76D7C4',
    padding: 20,
    marginTop: -350,
    marginLeft: 20,
    marginRight: 20,
    zIndex: 2, // Asegura que la alerta aparezca sobre otros elementos
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  alertContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  alertText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  alertButton: {
    backgroundColor: '#76D7C4',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  alertButtonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});

export default DetailConsulta;
