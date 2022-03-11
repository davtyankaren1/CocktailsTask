import {createSlice} from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name: "loading",
    initialState: {loading: false},
    reducers: {
        loadingTrue: (state) => {
            state.loading = true
        },
        loadingFalse: (state) => {
            state.loading = false
        }
    }
})

export const selectLoading = (state: any) => state.loading.loading

export const {loadingTrue, loadingFalse} = loadingSlice.actions
export default loadingSlice.reducer
