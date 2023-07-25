import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    items: [],
    loading: false,
    error: null
};


// PRODUCT ACTION


//Get All Products
export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async(id=null, {rejectWithValue})=>{
        try {
            const response = await axios.get("http://localhost:5000")
            return response?.data;      
        } catch (error) {
            return rejectWithValue(error.response.data)   //customize error with rejectwithvalue
        }
      
    }
)




//Create Slice is Product REDUCER


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},  

    extraReducers: (builder)=>{   // REDUCER LOGIC  AUTOMATICALLY CREATES 3 POSSIBLE WAYS (pending ,fulfilled, rejected)
        builder.addCase(productsFetch.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(productsFetch.fulfilled, (state,action)=>{
            state.loading = false
            state.items = action.payload
        })
        builder.addCase(productsFetch.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})


//To export reducer we do that way
export default productSlice.reducer;