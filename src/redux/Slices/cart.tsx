import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sizeList } from "../../pages";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { getCartFromLS } from "../../utils/getCartFromLS";
import { RootState } from "../store";
export type CartProps = {
    id: number,
    title: string,
    size: string,
    price: number,
    count: number,
    imageUrl: string,
    data: string,
}
const cartData = getCartFromLS();
type cartState = {
    items: CartProps[],
    totalPrice: number,
    size: number,

}
const initialState: cartState = {
    totalPrice: cartData.totalPrice,
    size: 0,
    items: cartData.items,
};
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<any>) {
            const findItem = state.items.find((obj) => obj.id === action.payload.id)
            if (findItem) {
                findItem.count++;
            }
            else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }
            state.totalPrice = calcTotalPrice(state.items)


        },
        minusItem(state, action: PayloadAction<number>) {
            const findItem = state.items.find((obj) => obj.id === action.payload)
            if (findItem) {
                findItem.count--;
            }
            state.totalPrice = calcTotalPrice(state.items)

        },
        removeItem(state, action: PayloadAction<number>) {
            state.items = state.items.filter((obj) => obj.id !== action.payload)
            state.totalPrice = calcTotalPrice(state.items)

        },
        setSize(state, action) {
            state.size = action.payload
        },
        clearItem(state) {
            state.items = [];
            state.totalPrice = 0;
        },

    }
});
export const selectCart = (state: RootState) => state.cart;

export const selectSize = (state: RootState) => state.cart.size;

export const { addItem, removeItem, minusItem, clearItem, setSize } = CartSlice.actions;

export default CartSlice.reducer;