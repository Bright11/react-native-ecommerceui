import {
  View,
  Text,
  Image,
  SafeAreaView,
  Pressable,
  Alert,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import items from './cartdata';
import cartPagestyle from './cartPagestyle';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector, useDispatch} from 'react-redux';
import {cartSlice} from '../store/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const [checkqty, setCheckqty] = useState();

  const qtyplus = item => {
    //Alert.alert('id', item.product.id);
    dispatch(
      cartSlice.actions.changeQuantity({
        productId: cart.product.id,
        price: 1,
      }),
    );
  };
  // const cartitems = useSelector(state => state.cart.items);
  const cart = useSelector(state => state.carts.carts);
  //  const product = useSelector(state => state.products.products);
  console.log('cart', cart);
  return (
    <SafeAreaView>
      <FlatList
        data={cart}
        renderItem={({item}) => (
          <>
            <View style={cartPagestyle.cartimgview}>
              <Image
                style={cartPagestyle.cartimg}
                source={item.product.image}
              />
              <Text style={cartPagestyle.cartname}>{item.product.name}</Text>
            </View>
            <View style={cartPagestyle.cartdeletview}>
              <Text style={cartPagestyle.cartprics}>${item.quantity}</Text>
              <View style={cartPagestyle.cartupdateqtyview}>
                <Pressable
                  style={cartPagestyle.cartminuspress}
                  onPress={qtyplus}>
                  <Text style={cartPagestyle.cartplus}>+</Text>
                </Pressable>
                <TextInput
                  keyboardType="numeric"
                  style={cartPagestyle.qty}
                  value="1"
                />
                <Pressable style={cartPagestyle.cartminuspress}>
                  <Text style={cartPagestyle.cartminus}>-</Text>
                </Pressable>
              </View>
              <Pressable>
                <Feather name="delete" size={24} color="black" />
              </Pressable>
            </View>
          </>
        )}
        keyExtractor={item => item.product.id}
      />
      <View style={cartPagestyle.totalview}>
        <Text style={cartPagestyle.totaltext}>Total $2000</Text>
        <Text style={cartPagestyle.totaltext}>Tax $200</Text>
      </View>
      <Pressable style={cartPagestyle.checkoutspress}>
        <Text style={cartPagestyle.checkouttext}>Checkout</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default CartPage;
