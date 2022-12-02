import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { View,Text,StyleSheet,Button } from 'react-native'
import { styles } from '../estilos/Estilos';


export const PantallaTres = () => {

  const navigator=useNavigation()
  return (
<View style={styles.container}>
     <Text style={styles.title}>PantallaTres </Text>

     <Button
        title='Pagina Principal '
        onPress={()=>navigator.navigate("PantallaUno")}
     />
</View>
 )
};



export default PantallaTres;
