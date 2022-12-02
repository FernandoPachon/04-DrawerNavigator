import { createStackNavigator } from '@react-navigation/stack';
import PantallaUno from '../pantallas/PantallaUno';
import PantallaDos from '../pantallas/PantallaDos';
import PantallaTres from '../pantallas/PantallaTres';
import { Usuario } from '../pantallas/Usuario';

export type RootStackParams = {
  PantallaUno:undefined,
  PantallaDos:undefined,
  PantallaTres:undefined,
  Usuario:{ id: number, nombre: string},
}
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = ()=> {
  return (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                elevation: 0
            },
            cardStyle: {
                backgroundColor: 'white',
            }
        }}
    >
      <Stack.Screen name="PantallaUno" options ={{title:'PantallaUno'}}component={PantallaUno} />

      <Stack.Screen name="PantallaDos"  options ={{title:'PantallaDos'}}component={PantallaDos} />

      <Stack.Screen name="PantallaTres" options ={{title:'PantallaTres'}} component={PantallaTres} />

      <Stack.Screen name="Usuario" options ={{title:'Usuario'}} component={Usuario} />
     
    </Stack.Navigator>
  );
}