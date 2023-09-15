import React from 'react';
import { Provider } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from './screens/account';
import Megamenu from './components/megamenu';
import Home from './screens/home';

import configureStore from './store';

const Drawer = createDrawerNavigator();

const store = configureStore()
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerStyle: { backgroundColor: '#fdc10e' },
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                  iconName = focused
                    ? 'ios-person-circle'
                    : 'ios-person-circle-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'ios-settings' : 'ios-settings-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#fdc10e',
              tabBarInactiveTintColor: 'black',
            })}
          >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Megamenu} />
          </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}



const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});

export default App;
