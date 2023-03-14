import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  carts: [],
  deliveryfee: 10,
  freeDeliveryfrom: 200,
};

export const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      //const newProduct = action.payload.product;
      const newProduct = action.payload.product;
      // state.carts.push({product: newProduct, quantity: 1});
      //update item qty if is being added more then 1
      const updatecart = state.carts.find(
        cat => cat.product.id === newProduct.id,
      );
      if (updatecart) {
        updatecart.quantity += 1;
      } else {
        state.carts.push({product: newProduct, quantity: 1});
      }
      // console.log('new', newProduct);
    },
    changeQuantity: (state, action) => {
      const {productId, price} = action.payload;
      const updatecart = state.carts.find(cat => cat.product.id === productId);
      if (updatecart) {
        updatecart.quantity += price;
      }
    },
  },
});
