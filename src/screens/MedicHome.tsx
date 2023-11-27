import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useCallback, useState } from 'react';
import { Image, RefreshControl, ScrollView, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Row, Rows, Table } from 'react-native-table-component';
import { styles } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> { }
const MedicHome = ({ navigation }: Props) => {
    const data = [
        {
            nombre: 'Alejandro',
            apellido: 'Valles',
            fechaNacimiento: '30/08/2007',
            tarjetaSanitaria: 'AR500663365V',
            fechaCita: '12/12/2023',
            centroSalud: 'Delicias Sur',
            motivoCita: 'Dolor de rodilla',
            nombreMedico: 'Javier',
            apellidoMedico: 'Gutierrez'
        },
        {
            nombre: 'Javier',
            apellido: 'Valles',
            fechaNacimiento: '04/10/2003',
            tarjetaSanitaria: 'AR500663465J',
            fechaCita: '12/12/2023',
            centroSalud: 'Delicias Sur',
            motivoCita: 'Dolor de rodilla',
            nombreMedico: 'Javier',
            apellidoMedico: 'Gutierrez'
        },
        {
            nombre: 'Irene',
            apellido: 'Gómez',
            fechaNacimiento: '24/03/1971',
            tarjetaSanitaria: 'AR500653665X',
            fechaCita: '12/12/2023',
            centroSalud: 'Delicias Sur',
            motivoCita: 'Dolor de rodilla',
            nombreMedico: 'Javier',
            apellidoMedico: 'Gutierrez'
        },
        {
            nombre: 'Alberto',
            apellido: 'Valles',
            fechaNacimiento: '01/10/1970',
            tarjetaSanitaria: 'AR509683065Y',
            fechaCita: '12/12/2023',
            centroSalud: 'Delicias Sur',
            motivoCita: 'Dolor de rodilla',
            nombreMedico: 'Javier',
            apellidoMedico: 'Gutierrez'
        },
    ];

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

    const tableHead = ['Nombre', 'Tarjeta Sanitaria', 'Fecha de Nacimiento'];
    const tableData = data.map((paciente) => [
        <TouchableOpacity
            key={paciente.nombre}
            onPress={() => navigation.navigate('PacientDetail', { paciente })}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={require('../assets/images/profile.png')}
                    style={{ width: 20, height: 20, borderRadius: 15, marginRight: 10 }}
                />
                <Text>{`${paciente.nombre} ${paciente.apellido}`}</Text>
            </View>
        </TouchableOpacity>,
        paciente.tarjetaSanitaria,
        paciente.fechaNacimiento,
    ]);

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
            contentContainerStyle={styles.globalMargin}
        >
            <View style={styles.globalMargin}>
                <Text style={styles.title}>Pacientes</Text>
                <View style={{ height: 50 }} />
                <Table borderStyle={{ borderWidth: 1, borderRadius: 10, borderColor: '#76D7C4' }}>
                    <Row
                        data={tableHead}
                        style={{ width: 388, height: 60, backgroundColor: '#76D7C4' }}
                        textStyle={{ margin: 6, color: 'white' }}
                    />
                    <Rows data={tableData} style={{ width: 388, height: 60 }} textStyle={{ margin: 6 }} />
                </Table>
            </View>
        </ScrollView>

    );
};

export default MedicHome