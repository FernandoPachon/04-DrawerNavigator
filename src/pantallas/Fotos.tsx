import React, { useContext } from 'react'
import { View,Text,StyleSheet, Button } from 'react-native'
import { AuthContext } from '../context/AuthContex';
import { styles } from '../estilos/Estilos';


export const Fotos = () => {

  const {Desconectarse,authState:{Conectado}} = useContext(AuthContext)

  return (
<View style={styles.container}>
     <Text style={styles.titulo}> Fotos </Text>

      {
        Conectado&&(
          <Button
          title='Desconectarse'
          onPress={Desconectarse}
         />
        )

      }
    
</View>
 )
};
 

export default Fotos;
