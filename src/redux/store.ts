import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import Filter from './Slices/Filter';
import product from './Slices/ProductsSlice';
import cart from './Slices/cart'
export const store = configureStore({
    reducer: {
        Filter,
        cart,
        product,
    }
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();