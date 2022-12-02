import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { View,Text,StyleSheet } from 'react-native'
import { colores, styles } from '../estilos/Estilos';
import IconosTocables from '../componentes/IconosTocables';


export const Chat = () => {
  return (
<View style={styles.container}>
     <Text style={styles.titulo}> Chat </Text>

     <Text>
     <IconosTocables nombreIcono="enter-outline"/>
     <IconosTocables nombreIcono="chatbox"/>
     <IconosTocables nombreIcono="chatbox-ellipses"/>
     <IconosTocables nombreIcono="chatbubble"/>
     <IconosTocables nombreIcono="chatbubbles"/>

     </Text>
</View>
 )
};

 

export default Chat;
