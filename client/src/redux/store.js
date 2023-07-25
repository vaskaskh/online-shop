import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/productReducers";
import thunk from 'redux-thunk';




const middleware = [thunk]

const reducers = combineReducers({
    products: productReducer
})


const store = configureStore({
      reducer:{
        reducers
      }
},applyMiddleware(...middleware))


    export default store;