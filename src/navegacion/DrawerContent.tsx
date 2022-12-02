import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
//import { StackNavigator } from './StackNavigator';
import PantallaTres from '../pantallas/PantallaTres';
import PantallaDos from '../pantallas/PantallaDos';
import Configuraciones from '../pantallas/Configuraciones';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { styles } from '../estilos/Estilos';
//import { DrawerNavigator } from './DrawerNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigator } from './TapNavigator';
import { TabBottomNavigator } from './TabBottomNavigator';



const Drawer = createDrawerNavigator();

const Stack=createStackNavigator();




export const DrawerContent=()=> {

    const dimensions = useWindowDimensions();
    console.log("<=>",dimensions.width);
    
  return ( 
    <Drawer.Navigator
    screenOptions={{
        drawerType: (dimensions.width >= 750)? 'permanent': 'front',
      }}
     drawerContent={(props)=><DrawerMenu {...props}/>}
    >
      <Drawer.Screen name="TabBottomNavigator" component={TabBottomNavigator} />
      <Drawer.Screen name="PantallaDos" component={PantallaDos} />
      <Drawer.Screen name="PantallaTres" component={PantallaTres} />
      <Drawer.Screen name="Configuraciones" component={Configuraciones} />
  <Drawer.Screen name="TopNavigator" component={TabNavigator} />

    </Drawer.Navigator>
  );
}

const DrawerMenu=({navigation}:DrawerContentComponentProps)=>{
    
  return (
    <DrawerContentScrollView>
      {/* Avatar */}
      <View style={styles.cajaAvatar}>
        <Image
          source={{
            uri:'https://www.dgft.de/wp-content/uploads/Sample-800x800.png'
          }}
          style={styles.avatar}
        />
      </View>
      {/* Menu */}
          <View style={styles.contenedorMenu}>
            <TouchableOpacity 
            style={styles.menuBoton}
            onPress={()=>navigation.navigate("TabBottomNavigator")}
            >
              <Text style={styles.menuTexto}>
                Menu
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.menuBoton}
            onPress={()=>navigation.navigate("PantallaDos")}
            >
              <Text style={styles.menuTexto}>
                Pantalla Dos
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.menuBoton}
            onPress={()=>navigation.navigate("PantallaTres")}
            >
              <Text style={styles.menuTexto}>
                Pantalla Tres
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.menuBoton}
            onPress={()=>navigation.navigate("Configuraciones")}
            >
              <Text style={styles.menuTexto}>
                Configuraciones
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.menuBoton}
            onPress={()=>navigation.navigate("TopNavigator")}
            >
              <Text style={styles.menuTexto}>
                Top
              </Text>
            </TouchableOpacity>
          </View>
      </DrawerContentScrollView>
  );
  
}