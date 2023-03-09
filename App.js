import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './componets/pages/Home';
import Product from './componets/pages/Product';
import Details from './componets/pages/Details';
import CartPage from './componets/pages/CartPage';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="product" component={Product} />
        {/* <Stack.Screen name="details" component={Details} /> */}
        <Stack.Screen
          name="details"
          component={Details}
          // modal
          //fullScreenModal
          options={{presentation: 'modal'}}
        />
        <Stack.Screen name="cart" component={CartPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
