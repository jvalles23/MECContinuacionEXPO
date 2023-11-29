import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import Button from '../components/Button';
import { colors } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';

const PDFViewer = ({ route }) => {
    const [pacienteInfo, setPacienteInfo] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        setPacienteInfo(route.params.paciente);
    }, [route.params.paciente]);

    const handleGuardarJustificante = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        // Cerrar el modal
        setModalVisible(false);
    };

    if (!pacienteInfo) {
        return (
            <View style={styles.container}>
                <Text style={styles.noDataText}>No se encontraron datos del paciente.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('MedicHome')}>
                <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: -55, alignItems: 'center' }}>
                    <Image source={require('../assets/images/MEC.png')} style={{ width: 200, height: 120 }} />
                </View>
            </TouchableOpacity>

            <View style={{ marginLeft: 110, marginTop: 20 }}>
                <Text style={styles.title}>Lugar y Fecha: Aragón, {`${pacienteInfo.fechaCita}`}</Text>
            </View>

            <View style={{ marginLeft: 10, marginTop: 60 }}>
                <Text style={{ fontSize: 13 }}>A quien corresponda,</Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.value}>
                    Certifico para todos los efectos que el Sr.
                    <Text style={{ fontWeight: 'bold' }}>{` ${pacienteInfo.nombre} ${pacienteInfo.apellido},`}</Text>
                    con fecha de nacimiento
                    <Text style={{ fontWeight: 'bold' }}>{` ${pacienteInfo.fechaNacimiento}`} </Text>
                    , con tarjeta sanitaria
                    <Text style={{ fontWeight: 'bold' }}>{` ${pacienteInfo.tarjetaSanitaria}`} </Text>
                    estuvo en el centro
                    <Text style={{ fontWeight: 'bold' }}>{` ${pacienteInfo.centroSalud} `}</Text>
                    en el día
                    <Text style={{ fontWeight: 'bold' }}>{` ${pacienteInfo.fechaCita}`}</Text>
                    ,el motivo fue por
                    <Text style={{ fontWeight: 'bold' }}>{` ${pacienteInfo.motivoCita}`}.</Text>
                </Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.value}>
                    Atendido por el profesional
                    <Text style={{ fontWeight: 'bold' }}>{` ${pacienteInfo.nombreMedico} ${pacienteInfo.apellidoMedico}`}</Text>
                    , cuya especialidad medica es medicina.
                </Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.value}>
                    Sirva este documento para acreditar la presencia en el centro y atención médica
                    al paciente antes mencionado y como justificante de falta de asistencia.
                </Text>
            </View>
            <View style={{ marginLeft: 140, marginTop: 80 }}>
                <Text style={styles.value}>(Firma y/o sello del profesional)</Text>
            </View>
            <Button
                label='Guardar justificante'
                kind='primary_outline'
                size='lg'
                onPress={handleGuardarJustificante}
                customStyle={{
                    marginLeft: 10,
                    height: 40,
                    marginTop: 20
                }}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>¡Guardado correctamente!</Text>
                        <TouchableOpacity onPress={closeModal}>
                            <Text style={styles.modalButton}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: -10
    },
    infoContainer: {
        marginTop: 35,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    value: {
        fontSize: 13,
        marginLeft: 10
    },
    noDataText: {
        fontSize: 16,
        textAlign: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.primary
    },
    modalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    modalButton: {
        fontSize: 16,
        color: 'red',
    },
});

export default PDFViewer;
