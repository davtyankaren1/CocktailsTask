import { configureStore } from "@reduxjs/toolkit";
import cocktailSlide from './features/cocktailsSlide'
import loadingSlice from "./features/loadingSlice";

export default configureStore({
    reducer: {
        cocktail: cocktailSlide,
        loading: loadingSlice,
    },
});
