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
import {useSelector} from 'react-redux';
const CartPage = () => {
  const [checkqty, setCheckqty] = useState();

  const qtyplus = () => {
    if (!checkqty) {
      //Alert.alert('check qty', '7');
    }
  };
  // const cartitems = useSelector(state => state.cart.items);
  const cart = useSelector(state => state.cart.items);
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        {cart?.map(cat => (
          <View>
            <View style={cartPagestyle.cartimgview}>
              {/* <Image style={cartPagestyle.cartimg} source={cat.image} /> */}
              <Text style={cartPagestyle.cartname}>{cat.name}</Text>
            </View>
            <View style={cartPagestyle.cartdeletview}>
              <Text style={cartPagestyle.cartprics}>${cat.name}</Text>
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
          </View>
        ))}
        <View style={cartPagestyle.totalview}>
          <Text style={cartPagestyle.totaltext}>Total $2000</Text>
          <Text style={cartPagestyle.totaltext}>Tax $200</Text>
        </View>
      </ScrollView>

      <Pressable style={cartPagestyle.checkoutspress}>
        <Text style={cartPagestyle.checkouttext}>Checkout</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default CartPage;
