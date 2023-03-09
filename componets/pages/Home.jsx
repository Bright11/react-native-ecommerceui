import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useLayoutEffect} from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import homestyle from './homestyle';
import {TextInput} from 'react-native-gesture-handler';
//import backgroungimage from './image/background.jpg';
const Drawer = createDrawerNavigator();
const Home = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerStyle: {backgroundColor: '#FEFEFE'},
      headerTitleStyle: {color: 'black'},
      headerLeft: () => (
        <View style={homestyle.headerleft}>
          <Text style={homestyle.headerlefttext}>Bright Shop</Text>
          {/* <Feather name="shopping-cart" size={24} color="black" /> */}
        </View>
      ),
      headerRight: () => (
        <View>
          <Text style={homestyle.headerleftright}>The best Shop</Text>
          {/* <Feather name="shopping-cart" size={24} color="black" /> */}
        </View>
      ),
    });
  }, [navigation]);
  return (
    // <SafeAreaView style={homestyle.safearea}>

    <ImageBackground
      style={homestyle.backgroundimghome}
      source={require('./image/background.jpg')}>
      <StatusBar backgroundColor="#613DE6" barStyle="black" />
      {/* source={require('@expo/snack-static/react-native-logo.png')} */}
      <KeyboardAvoidingView style={homestyle.homeview}>
        {/* <View> */}
        <TextInput style={homestyle.logininput} placeholder="User name" />
        <TextInput style={homestyle.logininput} placeholder="User Email" />
        <TextInput
          secureTextEntry={true}
          style={homestyle.logininput}
          placeholder="Password"
        />

        <Pressable
          onPress={() => navigation.navigate('product')}
          style={homestyle.loginbtn}>
          <Text style={homestyle.logintext}>Register</Text>
        </Pressable>
        {/* </View> */}
      </KeyboardAvoidingView>
    </ImageBackground>
    // </SafeAreaView>
  );
};

export default Home;
