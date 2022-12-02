import React, { useEffect } from 'react'
import { View,Text,StyleSheet } from 'react-native'


export const TabPantallaDos = () => {

  useEffect(() => {
    console.log('TabPantallaDos');
    
  },[]) 

  return (
<View style={styles.container}>
     <Text>TabPantallaDos </Text>
</View>
 )
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
});
export default TabPantallaDos;
