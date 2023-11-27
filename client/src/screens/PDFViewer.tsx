import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';

const PDFViewer = ({ route }) => {
    const [pacienteInfo, setPacienteInfo] = useState(null);

    useEffect(() => {
        // Inicializar el estado con la información del paciente
        setPacienteInfo(route.params.paciente);
    }, [route.params.paciente]);

    if (!pacienteInfo) {
        return (
            <View style={styles.container}>
                <Text style={styles.noDataText}>No se encontraron datos del paciente.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* Resto del código usando pacienteInfo en lugar de route.params.paciente */}
            <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: -55, alignItems: 'center' }}>
                <Image source={require('../assets/images/MEC.png')} style={{ width: 200, height: 120 }} />
            </View>
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
                onPress={() => console.log('Guardado')}
                customStyle={{
                    marginLeft: 10,
                    height: 40,
                    marginTop: 20
                }}
            />
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
});

export default PDFViewer;
