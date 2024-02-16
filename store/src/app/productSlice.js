import { createSlice} from '@reduxjs/toolkit';
import {api} from '../api/api';

const productSlice = createSlice({
    name:"product",
    initialState:[],
    extraReducers: (builder) => { 
        builder.addMatcher(api.endpoints.getProduct.matchFulfilled, (state, { payload }) => {
            return [payload];
        })
    }
})

export default productSlice.reducer;