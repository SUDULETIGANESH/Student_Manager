import { configureStore } from "@reduxjs/toolkit";
import studentReducer from './Reducers'

const store = configureStore({
    reducer:{
        students :studentReducer,
    },
});


export default store;