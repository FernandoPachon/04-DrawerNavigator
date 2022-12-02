import React ,{useEffect,useContext}from 'react'
import { View,Text,StyleSheet,Button } from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'
import { styles } from '../estilos/Estilos'
import { RootStackParams } from '../navegacion/StackNavigator';
import { AuthContext } from '../context/AuthContex';

interface RouterParams{
  id:number;nombre:string;
}
interface Props extends StackScreenProps<RootStackParams, 'Usuario'>{};

export const Usuario = ({route,navigation}:Props) => {
  
  const params =route.params as RouterParams;
  const {CambioUsuario} = useContext(AuthContext)

  useEffect(() => {
    navigation.setOptions({
      title:params.nombre
    });
  
   
  }, [])
  useEffect(() => {
    CambioUsuario(params.nombre);
  }, [])
  

  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>
            {JSON.stringify(params,null,3)}
        </Text>
        
    </View>
  )
}
