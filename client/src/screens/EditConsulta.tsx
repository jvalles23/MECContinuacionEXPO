import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform } from 'react-native';
import Button from '../components/Button';
import { colors, styles } from '../theme/appTheme';

const EditConsulta = ({ route, navigation }) => {
  const { nombre, apellido, fechaNacimiento, tarjetaSanitaria, fechaCita, motivoConsulta } = route.params;

  const [editedNombre, setEditedNombre] = useState(nombre);
  const [editedApellido, setEditedApellido] = useState(apellido);
  const [editedFechaNacimiento, setEditedFechaNacimiento] = useState(fechaNacimiento);
  const [editedTarjetaSanitaria, setEditedTarjetaSanitaria] = useState(tarjetaSanitaria);
  const [editedFechaCita, setEditedFechaCita] = useState(fechaCita);
  const [editedMotivoConsulta, setMotivoConsulta] = useState(motivoConsulta);

  const handleGuardarEdicionConsulta = () => {
    console.log('Guardar edición de consulta:', {
      editedNombre,
      editedApellido,
      editedTarjetaSanitaria,
      editedFechaCita,
      editedMotivoConsulta,
    });

    navigation.navigate('Detail', {
      nombre: editedNombre,
      apellido: editedApellido,
      tarjetaSanitaria: editedTarjetaSanitaria,
      fechaCita: editedFechaCita,
      motivoConsulta: editedMotivoConsulta,
    });
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setSelectedDate(date);
      setEditedFechaCita(date);
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
          style={{ ...stylesInput.input, color: '#75787B' }}
          placeholder="Nombre"
          value={editedNombre}
          editable={false}
        />
        <TextInput
          style={{ ...stylesInput.input, color: '#75787B' }}
          placeholder="Apellido"
          value={editedApellido}
          editable={false}
        />
        <TextInput
          style={{ ...stylesInput.input, color: '#75787B' }}
          placeholder="Tarjeta Sanitaria"
          value={editedTarjetaSanitaria}
          editable={false}
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
          placeholder="Motivo de Consulta"
          value={editedMotivoConsulta}
          onChangeText={(text) => setMotivoConsulta(text)}
        />

        <Button
          label='Guardar Edición'
          kind='primary'
          size='lg'
          onPress={handleGuardarEdicionConsulta}
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

export default EditConsulta;
