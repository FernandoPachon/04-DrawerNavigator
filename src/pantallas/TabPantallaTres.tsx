import React, { useEffect } from 'react'
import { View,Text,StyleSheet } from 'react-native'


export const TabPantallaTres = () => {

  useEffect(() => {
    console.log('TabPantallaTres');
    
  },[])

  return (
<View style={styles.container}>
     <Text>TabPantallaTres </Text>
</View>
 )
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
});
export default TabPantallaTres;
