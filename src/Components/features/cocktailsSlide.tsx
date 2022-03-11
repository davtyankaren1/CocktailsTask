import { createSlice } from "@reduxjs/toolkit";
import {loadingFalse, loadingTrue} from './loadingSlice';
import axios from "axios";

export const cocktailSlide = createSlice({
    name: "cocktail",
    initialState: {
        data: {},
        list: [],
    },
    reducers: {
        getCocktailData: (state, action) => {
            state.data = {...action.payload};
        },

        addCocktail: (state, action) => {
            const temp = [...state.list];
            // @ts-ignore
            temp.push(action.payload);
            state.list = temp
        },

        deleteCocktail: (state, action) => {
            const temp = [...state.list];
            state.list = temp.filter((item)=> {
                // @ts-ignore
                return item.idDrink !== action.payload
            })
        }
    }
});

export const getCocktailAsync = () => async (dispatch: any) => {
    dispatch(loadingTrue())
    try {
        await axios
            .get("https://thecocktaildb.com/api/json/v1/1/random.php")
            .then((res:any) => {
                dispatch(getCocktailData(res.data.drinks[0]));
            })
    } catch (err: any) {
        throw new Error(err);
    }finally {
        dispatch(loadingFalse())
    }
};

export const { getCocktailData, addCocktail, deleteCocktail } = cocktailSlide.actions;
export const showCocktail = (state:any) => state.cocktail.data;
export const showCocktailList = (state: any) => state.cocktail.list;
export default cocktailSlide.reducer;
