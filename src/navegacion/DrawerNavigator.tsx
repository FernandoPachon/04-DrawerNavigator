import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import PantallaTres from '../pantallas/PantallaTres';
import PantallaUno from '../pantallas/PantallaUno';
import PantallaDos from '../pantallas/PantallaDos';
import Configuraciones from '../pantallas/Configuraciones';
import {useWindowDimensions}from'react-native';

const Drawer = createDrawerNavigator();

export const DrawerNavigator=()=> {

  const {width}= useWindowDimensions();
  console.log(">=>",width);
  
  return (
    <Drawer.Navigator
    screenOptions={{
      drawerType: width >= 750 ? 'permanent' : 'front',
    }}
    >
      <Drawer.Screen name="DrawerNavigator" component={StackNavigator} />
      <Drawer.Screen name="PantallaDos" component={PantallaDos} />
      <Drawer.Screen name="PantallaTres" component={PantallaTres} />
      <Drawer.Screen name="Configuraciones" component={Configuraciones} />
    </Drawer.Navigator>
  );
}

