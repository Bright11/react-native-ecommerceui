import {createSlice} from '@reduxjs/toolkit';
import product from '../pages/items';
const initialState = {
  products: product,
  //getting products details
  selectedProduct: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    //getting product details
    setSelectedProduct: (state, action) => {
      //   console.log('state', state);
      //   console.log('action', action);
      const productId = action.payload;
      state.selectedProduct = state.products.find(p => p.id === productId);
    },
    //the end
  },
});
