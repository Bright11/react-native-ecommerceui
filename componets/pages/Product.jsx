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
import {cartSlice} from './../store/cartSlice';
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

  const changecolor = cat => {
    //Alert.alert('AlertTitle', cat.name);
    // Alert.alert('Alert Title', 'My Alert Msg');
    setPressed(cat.name);
  };
  const addToCart = item => {
    //dispatch(cartSlice.actions.addCartItem({product}));
    //console.log('add to cart', item);
    Alert.alert('success', item.name);
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
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={category}
          renderItem={({item}) => (
            <>
              {pressed === item.name ? (
                <Pressable style={productstyle.categoryactive}>
                  <Text style={productstyle.categoryactivetext}>
                    {item.name}
                  </Text>
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => changecolor(item)}
                  style={productstyle.cate_holder}>
                  <Text style={productstyle.cate_holdertext}>{item.name}</Text>
                </Pressable>
              )}
            </>
          )}
          keyExtractor={item => item.id}
        />
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
                <Pressable onPress={() => addToCart(item)}>
                  <Feather name="shopping-cart" size={24} color="#977EEC" />
                </Pressable>
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
