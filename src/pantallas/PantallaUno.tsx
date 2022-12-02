import React ,{useEffect}from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
//import {StackScreenProps} from '@react-navigation/stack';
import {colores, styles} from '../estilos/Estilos';
import { DrawerScreenProps } from '@react-navigation/drawer';
import  Icon from 'react-native-vector-icons/Ionicons';

//interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const PantallaUno = ({navigation}: Props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Pagina Principal </Text>
      <Button
        title="Siguiente pagina "
        onPress={() => navigation.navigate('PantallaDos')}
      />
      <Text style={styles.title}>Usuarios </Text>

      <View style={{flexDirection:'row',justifyContent: 'center',alignContent: 'center'}}>
        <TouchableOpacity
         style={styles.botonUsuario}
          onPress={() =>
            navigation.navigate('Usuario', {
              id: 1,
              nombre: 'Fernando',
            })
          }>
            <Icon
              name="man"
              color="#1A1C1D"
              size={35}
            />
          <Text> Fernando </Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={{
            ...styles.botonUsuario,
            backgroundColor: '#FF9F60',
         }}
          onPress={() =>
            navigation.navigate('Usuario', {
              id: 1,
              nombre: 'Catalina',
            })
          }>
            <Icon
              name='woman'
              color={colores.secundarios}
              size={35}
            />
          <Text> Catalina </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PantallaUno;
