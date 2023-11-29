import DateTimePicker from '@react-native-community/datetimepicker';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import Button from '../components/Button';
import { colors, styles } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> { }

const RegisterPacient = ({ navigation }: Props) => {

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
            style={{ flex: 1 }}
            behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
        >
            <View style={{ ...styles.globalMargin, marginTop: -30 }}>
                <Image
                    source={require('../assets/images/MEC.png')}
                    style={stylesInput.image}
                />
                <View style={stylesInput.container}>

                    <Text style={styles.label}>Nombre</Text>
                    <TextInput
                        style={stylesInput.input}
                        placeholder="Ingrese su nombre"
                        keyboardType='default'
                        selectionColor='#76D7C4'
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                    <Text style={styles.label}>Apellido</Text>
                    <TextInput
                        style={stylesInput.input}
                        placeholder="Ingrese su apellido"
                        keyboardType='default'
                        selectionColor='#76D7C4'
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                    <Text style={styles.label}>Fecha Nacimiento</Text>
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
                        />
                    )}
                    <Text style={styles.label}>Tarjeta Sanitaria</Text>
                    <TextInput
                        style={stylesInput.input}
                        placeholder="Ingrese su tarjeta sanitaria"
                        keyboardType='default'
                        selectionColor='#76D7C4'
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                    <Text style={styles.label}>Contraseña</Text>
                    <TextInput
                        style={stylesInput.input}
                        placeholder="*******"
                        keyboardType='default'
                        selectionColor='#76D7C4'
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                    <Button
                        label='Register'
                        kind='primary'
                        size='lg'
                        onPress={() => navigation.navigate('PacientScreen')}
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
        marginTop: -70
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
        marginBottom: 10,
        paddingBottom: 4,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginBottom: 16,
        marginTop: 40
    },
    dateText: {
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
        marginBottom: 10,
        paddingBottom: 4,
        color: colors.primary,
    },
});

export default RegisterPacient;
