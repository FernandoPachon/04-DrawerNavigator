import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StackNavigator } from './StackNavigator';
import Configuraciones from '../pantallas/Configuraciones';
//import { colores } from '../estilos/Estilos';
import { TabNavigator } from './TapNavigator';
import { Text,} from 'react-native';
import { colores } from '../estilos/Estilos';
import Icon  from 'react-native-vector-icons/Ionicons';


const Tab = createMaterialBottomTabNavigator();

export const TabBottomNavigator=()=> {
  return (
    <Tab.Navigator
        barStyle={{
            backgroundColor:colores.primarios,
             
        }}
       screenOptions={({route})=>(
        
        {
            tabBarActiveTintColor:'red',
            tabBarColor:'red',
           
            tabBarIcon:()=>{
                let iconName: string
                switch (route.name) {
                    case 'Inicio':
                        iconName = 'home'
                        return <Icon name={iconName}color="#1A1C1D"size={25}/>
                    
                    case 'Multimedia':
                        iconName = 'play-circle'
                        return <Icon name={iconName}color="#1A1C1D"size={25}/>
                    case 'Configuraciones':
                        iconName = 'flower'
                    return <Icon name={iconName}color="#1A1C1D"size={25}/>
                }
                
            },
            title:route.name
        }
       )}
    >
      <Tab.Screen name="Inicio" component={StackNavigator} />
      <Tab.Screen name="Multimedia" component={TabNavigator} />
      <Tab.Screen name="Configuraciones" component={Configuraciones} />
    </Tab.Navigator>
  );
}