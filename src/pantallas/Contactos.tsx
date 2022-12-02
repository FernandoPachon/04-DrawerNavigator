import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {colores, styles} from '../estilos/Estilos';
import {AuthContext} from '../context/AuthContex';
import Icon from 'react-native-vector-icons/Ionicons';

export const Contactos = () => {
  const {Registrarse, authState} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Contactos </Text>
      {!authState.Conectado && (
        <Button title="Registrarse" onPress={Registrarse} />
      )}

      {
        authState.iconoFavorito&&(
          <Icon
          name={authState.iconoFavorito!}
          size={150}
          color={colores.secundarios} 
        />
        )
        
      }
    </View>
  );
};

export default Contactos;
