import React, { useEffect } from 'react'
import { View,Text,StyleSheet } from 'react-native'


export const TabPantallaUno = () => {

  useEffect(() => {
    console.log('TabPantallaUno');
    
  },[])

  return (
<View style={styles.container}>
     <Text>TabPantallaUno </Text>
</View>
 )
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
});
export default TabPantallaUno;
