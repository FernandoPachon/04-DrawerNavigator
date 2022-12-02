import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chat from '../pantallas/Chat';
import Contactos from '../pantallas/Contactos';
import Fotos from '../pantallas/Fotos';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { StackNavigator } from './StackNavigator';
import { colores, styles } from '../estilos/Estilos';
import { Text } from "react-native";
import Icon  from 'react-native-vector-icons/Ionicons';


const Tab = createMaterialTopTabNavigator();


export const TabNavigator=()=> {

  const{top:paddingTop}=useSafeAreaInsets();


  return (
    <Tab.Navigator
    style={{paddingTop,}}
    sceneContainerStyle={{
      backgroundColor:'white',
    }}
   
    screenOptions={({route}) => ({
      tabBarPressColor: colores.primarios,
      //tabBarShowIcon: true,
      tabBarIndicatorStyle: {
        backgroundColor: colores.primarios,
      },
      tabBarStyle: {
        //en ios es shadowColor:"transparent"
        
      },
      tabBarIcon: ({color}) => {
        let iconName: string ;
        switch (route.name) {
          case 'Chat':
            iconName = 'chatbox-ellipses';
            return <Icon name={iconName}color="#1A1C1D"size={25}/>

          case 'Contactos':
            iconName = 'person';
            return <Icon name={iconName}color="#1A1C1D"size={25}/>

          case 'Fotos':
            iconName = 'image';
            return <Icon name={iconName}color="#1A1C1D"size={25}/>
        }
      
      },
    })}
    >
        <Tab.Screen
        name="Chat"
        options={{title: 'Chat'}}
        component={Chat}
      />
      <Tab.Screen name="Contactos" 
        options={{title: 'Contactos'}} 
        component={Contactos} />
      <Tab.Screen
        name="Fotos"
        options={{title: 'Fotos'}}
        component={Fotos}
      />
    </Tab.Navigator>
  );
}