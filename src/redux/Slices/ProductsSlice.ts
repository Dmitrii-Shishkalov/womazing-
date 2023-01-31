import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';
import { RootState } from "../store";
export type itemsParams = {
    category: string,
    currentPage: string,
}
export const fetchItems = createAsyncThunk(
    'product/fetchItemsStatus', async (params: itemsParams) => {
        const { category, currentPage } = params;
        const { data } = await axios.get(`https://6395f0a8a68e43e418f60155.mockapi.io/fds?page=${currentPage}&limit=6&${category}`);

        return data
    })
export type ItemType = {
    id: string,
    title: string,
    types: number[],
    size: string,
    count: number,
    price: number,
    imageUrl: string,
}
export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}
interface ProductSliseState {
    status: Status;
    items: ItemType[];
}

const initialState: ProductSliseState = {
    items: [],
    status: Status.LOADING,

};
const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchItems.pending, (state) => {
            state.status = Status.LOADING
            state.items = [];
        })
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS
        })
        builder.addCase(fetchItems.rejected, (state) => {
            state.status = Status.ERROR;
            state.items = [];
        })
    }
});
export const selectProductData = (state: RootState) => state.product;

export const { setItems } = ProductSlice.actions;

export default ProductSlice.reducer;