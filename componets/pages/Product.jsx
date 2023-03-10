import {View, Text, Pressable, Alert, Image} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, ScrollView, TextInput} from 'react-native-gesture-handler';
import productstyle from './productstyle';
import category from './catgory';
import {StyleSheet} from 'react-native/types';
//import product from './items';
import {useSelector, useDispatch} from 'react-redux';
import {productsSlice} from '../store/productsSlice';
const Product = ({navigation}) => {
  const dispatch = useDispatch();
  const [pressed, setPressed] = useState(null);

  const product = useSelector(state => state.products.products);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Product',
      headerRight: () => (
        <View>
          <Feather
            onPress={() => navigation.navigate('cart')}
            name="shopping-cart"
            size={24}
            color="black"
          />
        </View>
      ),
    });
  }, [navigation]);

  const changecolor = ({cat}) => {
    Alert.alert('Alert Title');
    // Alert.alert('Alert Title', 'My Alert Msg');
    //setPressed(true);
  };
  return (
    <SafeAreaView style={productstyle.safeareav}>
      <View style={productstyle.searchview}>
        <Pressable>
          <FontAwesome5 name="search" size={20} color="black" />
        </Pressable>
        <TextInput
          style={productstyle.searchinput}
          placeholder="Search for product"
        />
      </View>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {category?.map(cat => (
            <Pressable
              key={cat.id}
              style={productstyle.cate_holder}
              onPress={() => changecolor(cat)}>
              <Text style={productstyle.cate_holdertext}>{cat.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <View style={productstyle.itemview_holder}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={product}
          numColumns={2}
          renderItem={({item}) => (
            <Pressable
              // onPress={() => navigation.navigate('details', {item})}
              onPress={() => {
                dispatch(productsSlice.actions.setSelectedProduct(item.id));
                navigation.navigate('details');
              }}
              style={productstyle.itemview}>
              <Image style={productstyle.itemimg} source={item.image} />
              <View style={productstyle.itemnameview}>
                <Text style={productstyle.itemname}>{item.name}</Text>
                <Feather name="shopping-cart" size={24} color="#977EEC" />
              </View>
              <Text style={productstyle.description} numberOfLines={2}>
                {item.description}
              </Text>
              <Text style={productstyle.description}>${item.price}</Text>
            </Pressable>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Product;
