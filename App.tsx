import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {AuthProvider} from './src/context/AuthContex';
import {DrawerContent} from './src/navegacion/DrawerContent';
import {DrawerNavigator} from './src/navegacion/DrawerNavigator';
//import { StackNavigator } from './src/navegacion/StackNavigator'
//import { TabNavigator } from './src/navegacion/BottonTapNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator/> */}
        {/* <DrawerNavigator/> */}
        <DrawerContent />
        {/* <TabNavigator/> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};
export default App;
