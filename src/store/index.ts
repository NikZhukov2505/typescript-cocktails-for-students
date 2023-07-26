import { configureStore } from "@reduxjs/toolkit";
import cocktailsSlice from "./slices/cocktailsSlice";



const store = configureStore({
    reducer: {
        cocktails: cocktailsSlice
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch