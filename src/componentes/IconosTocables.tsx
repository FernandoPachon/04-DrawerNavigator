import React ,{useContext}from 'react'
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContex';

interface Props{
    nombreIcono:string;
}

export const IconosTocables = ({nombreIcono}:Props) => {



    const {IconoFavorito} = useContext(AuthContext);

  return (
<TouchableOpacity
    onPress={()=>IconoFavorito(nombreIcono)}
>
    <Icon 
    name={nombreIcono}
    color="#1A1C1D"
    size={35}/>
</TouchableOpacity>
 )
};


const styles = StyleSheet.create({
    container: {
    flex: 1, 
    },
});
export default IconosTocables;
