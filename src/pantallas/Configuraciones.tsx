import React, { useContext } from 'react'
import { View,Text,StyleSheet } from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons';
import { AuthContext, AuthState } from '../context/AuthContex';
import { colores, styles } from '../estilos/Estilos'


export const Configuraciones = () => {

  const {authState} = useContext(AuthContext)

  return (
<View style={styles.container}>
     <Text style={styles.titulo}>Configuraciones</Text> 

    <Text> {JSON.stringify(authState,null,4)} </Text>

    {
      authState.iconoFavorito &&(
        <Icon 
        name={authState.iconoFavorito}
        size={155}
        color={colores.secundarios}
      />
      )
      
    }
 
</View>
 )
}


export default Configuraciones;
