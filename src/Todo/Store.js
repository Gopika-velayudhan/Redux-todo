import todoslice from './formSlice';
import { configureStore } from '@reduxjs/toolkit';
 const store=configureStore({
    reducer:{
        todo:todoslice
    }
})
export default store