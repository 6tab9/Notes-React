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
} from '@react-navigation/drawer';
import * as SecureStore from 'expo-secure-store';

const Drawer = createDrawerNavigator();
export default function App() {
      return (
          <NavigationContainer>
              <Drawer.Navigator >
                  <Drawer.Screen name="s1" component={S1}  />
                  <Drawer.Screen name="s2" component={S2} />
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
