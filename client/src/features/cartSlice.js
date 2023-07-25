import {  createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQTy: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state, action){

            const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id);

            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQTy +=1
                toast.info(`increased  ${state.cartItems[itemIndex].name} cart quantity`,{
                    position: "bottom-left"
                })
            }else{
                const tempProduct = {...action.payload, cartQTy:1}
                state.cartItems.push(tempProduct);

            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        
        removeFromCart (state,action){
            const nextCartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
                )
                state.cartItems = nextCartItems;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
                toast.error(`${action.payload.name} removed from cart`,{
                    position: "bottom-left"
                })
       }, 

       removeAllItems (state){

        state.cartItems = []
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

        toast.error(`Cart is Empty! All items  have been removed`,{
                    position: "bottom-left"
                })
       },

       decreaseCartQty(state,action){
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )
            if(state.cartItems[itemIndex].cartQTy>1){
                state.cartItems[itemIndex].cartQTy -=1

                toast.info(`Decreased cart Quantity`,{
                    position: "bottom-left"
                })
            }else if(state.cartItems[itemIndex].cartQTy===1){
                const nextCartItems = state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                    )
                    state.cartItems = nextCartItems;
                    toast.error(`${action.payload.name} removed from cart`,{
                        position: "bottom-left"
                    })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
       },


       getTotal(state, action){
        
        let {total,quantity} = state.cartItems.reduce((cartTotal, cartItem)=>{
           
            const {price, cartQTy} = cartItem;
            const itemTotal = price * cartQTy;

            cartTotal.total +=itemTotal;
            cartTotal.qty +=cartQTy;

            return cartTotal
        },{
            total: 0,
            qty: 0
        });

        state.cartTotalQty = quantity;
        state.cartTotalAmount = total;
       }


      
    },
});

export const {addToCart, removeFromCart, removeAllItems, decreaseCartQty, getTotal} = cartSlice.actions;

export default cartSlice.reducer;