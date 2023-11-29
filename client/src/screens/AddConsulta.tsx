// AddConsulta.js
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, View, Platform } from 'react-native';
import { Text } from 'react-native-elements';
import Button from '../components/Button';
import { colors, styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';

const AddConsulta = ({ route }) => {
  const { agregarConsulta } = route.params;  // Obtiene la función agregarConsulta de los parámetros de ruta
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [motivoConsulta, setMotivoConsulta] = useState('');
  const [tarjetaSanitaria, setTarjetaSanitaria] = useState('');
  const [fechaCita, setFechaCita] = useState('');
  const navigation = useNavigation();

  const handleGuardarConsulta = () => {
    const nuevaConsulta = { nombre, apellido, tarjetaSanitaria, fechaCita, motivoConsulta };
    agregarConsulta(nuevaConsulta);
    console.log('Guardar consulta:', nuevaConsulta);
    navigation.navigate('PacientHome');
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setSelectedDate(date);
    }
    setShowDatePicker(false);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const formatDate = (date) => format(date, 'dd-MM-yyyy');

  return (
    <KeyboardAvoidingView 
      style={styles.globalMargin}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <View style={stylesInput.container}>
          <Image
            source={require('../assets/images/MEC.png')}
            style={stylesInput.image}
          />
          <TextInput
            style={stylesInput.input}
            placeholder="Nombre"
            placeholderTextColor={colors.primary}
            value={nombre}
            onChangeText={(text) => setNombre(text)}
          />

          <TextInput
            style={stylesInput.input}
            placeholder="Apellido"
            placeholderTextColor={colors.primary}
            value={apellido}
            onChangeText={(text) => setApellido(text)}
          />

          <TextInput
            style={stylesInput.input}
            placeholder="Tarjeta Sanitaria"
            placeholderTextColor={colors.primary}
            value={tarjetaSanitaria}
            onChangeText={(text) => setTarjetaSanitaria(text)}
          />

          <TouchableOpacity onPress={showDatepicker}>
            <Text style={stylesInput.dateText}>
              {formatDate(selectedDate)}
            </Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              display="default"
              onChange={handleDateChange}
              textColor="#76D7C4"
            />
          )}

          <TextInput
            style={stylesInput.input}
            placeholder="Motivo Consulta"
            placeholderTextColor={colors.primary}
            value={motivoConsulta}
            onChangeText={(text) => setMotivoConsulta(text)}
          />

          <Button
            label='Guardar Consulta'
            kind='primary'
            size='lg'
            onPress={handleGuardarConsulta}  // Utiliza la función handleGuardarConsulta
            customStyle={{
              height: 40,
              marginLeft: 15
            }}
          />
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
    placeholderTextColor: colors.primary,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  dateText: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    marginBottom: 10,
    paddingBottom: 4,
    color: colors.primary,
  },
});

export default AddConsulta;
