import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// import store from './redux/store';
import productsReducer from './features/productSlice';
import cartReducer, { getTotal } from './features/cartSlice';



const store = configureStore({
  reducer:{
    products: productsReducer,
    cart:cartReducer
  }
});


//dispatch when application loads 
store.dispatch(getTotal());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
        <App /> 
    </BrowserRouter>
  </Provider>
);
