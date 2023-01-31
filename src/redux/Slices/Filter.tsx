import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
export interface FilterSliceState {
    categoryId: number,
    currentPage: number,
    menuActive: boolean,
}
const initialState: FilterSliceState = {
    categoryId: 0,
    currentPage: 1,
    menuActive: false,
};
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoriesID(state, action: PayloadAction<number>) {
            state.categoryId = action.payload
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },
        setMenuActive(state, action: PayloadAction<boolean>) {
            state.menuActive = action.payload
        },
        setFilters(state, action) {
            state.categoryId = Number(action.payload.categoryId);
            state.currentPage = Number(action.payload.currentPage);

        }
    }
});
export const selectFilter = (state: RootState) => state.Filter;
export const selectCategory = (state: RootState) => state.Filter.categoryId;
export const selectMenu = (state: RootState) => state.Filter.menuActive;


export const { setCategoriesID, setCurrentPage, setFilters, setMenuActive, } = filterSlice.actions;

export default filterSlice.reducer;