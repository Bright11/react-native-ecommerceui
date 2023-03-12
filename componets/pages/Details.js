import {View, Text, Image, Pressable} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import items from './items';
import detailsstyle from './detailsstyles';
import Feather from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {cartSlice} from './../store/cartSlice';
import {productsSlice} from './../store/productsSlice';
const Details = ({navigation, route}) => {
  // const details = route.params.item;
  const details = useSelector(state => state.products.selectedProduct);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: details.name,
    });
  }, [navigation]);
  const dispatch = useDispatch();
  const addToCart = () => {
    console.log('add to cart');
    dispatch(cartSlice.actions.addCartItem({product}));
  };
  return (
    <SafeAreaView style={detailsstyle.detailssafeview}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={detailsstyle.detailsimgview}>
          <Image style={detailsstyle.detailsimg} source={details.image} />
        </View>
        <View style={detailsstyle.namepriceview}>
          <Text style={detailsstyle.itemname}>{details.name}</Text>
          <Text style={detailsstyle.itemprice}>${details.price}</Text>
        </View>
        <View style={detailsstyle.descriptionview}>
          <Text style={detailsstyle.descriptiontitle}>Description</Text>
          <Text style={detailsstyle.description}>{details.description}</Text>
        </View>
        <Pressable onPress={addToCart} style={detailsstyle.addtocartbtn}>
          <Text style={detailsstyle.addtocarttext}>Add to cart</Text>
          <Feather name="shopping-cart" size={24} color="white" />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
