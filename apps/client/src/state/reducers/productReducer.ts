import {createReducer} from '@reduxjs/toolkit';

const initialState = {
    products: {
        data: {},
        error: null
    },
};

const products = createReducer(initialState, (builder) => {
    builder
    
})

export default products;