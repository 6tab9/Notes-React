import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer'
import S1 from './components/S1'
import S2 from './components/S2'
const Drawer = createDrawerNavigator()
function CustomDrawerContent(props){
  return(
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>

      <DrawerItem
        label="test"
        icon={()=><Image/>}
        onPress={async ()=>console.log("aaa")}
      />
    </DrawerContentScrollView>
  )
}

export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props}/>}>
            <Drawer.Screen name="Notes List" component={S1}/>
            <Drawer.Screen name="Add Notes" component={S2}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});