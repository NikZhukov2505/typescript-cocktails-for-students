import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { cocktailsAPI } from "../../API/cocktailsAPI"
import { CocktailDetail } from "../interfaces"


type Cocktail = {
    strDrink: string
    strDrinkThumb: string
    idDrink: string
}

type CocktailsState = {
    cocktails: Cocktail[]
    cocktail: CocktailDetail | null
    loading: boolean
    error: string | null
}

const initialState: CocktailsState = {
    cocktails: [],
    cocktail: null,
    loading: false,
    error: null
}

export const fetchAllCocktails = createAsyncThunk<Cocktail[], undefined, { rejectValue: string }>(
    'cocktails/fetchAllCocktails',
    async (_, { rejectWithValue }) => {
        const data = await cocktailsAPI.getAllCocktails()
        // console.log(data);
        if (data.status !== 200) {
            return rejectWithValue('Error')
        }

        return data.data.drinks
    }
)

export const fetchByName = createAsyncThunk<Cocktail[], string, { rejectValue: string }>(
    'cocktails/fetchByName',
    async (name, { rejectWithValue }) => {
        const res = await cocktailsAPI.getByName(name)
        if (res.status !== 200) {
            return rejectWithValue('Error')
        }
        // console.log(res);
        return res.data.drinks
    }
)

export const fetchById = createAsyncThunk<Cocktail, string, { rejectValue: string }>(
    'cocktails/fetchById',
    async (id, { rejectWithValue }) => {
        const res = await cocktailsAPI.getById(id)
        if (res.status !== 200) {
            return rejectWithValue('Error')
        }
        return res.data.drinks[0]
    }
)

const cocktailsSlice = createSlice({
    name: 'cocktails',
    initialState,
    reducers: {},
    extraReducers: ({ addCase, addMatcher }) => {
        addCase(fetchAllCocktails.pending, (state) => {
            state.loading = true
            state.error = null
        })
        addCase(fetchAllCocktails.fulfilled, (state, action) => {
            state.cocktails = action.payload
            state.loading = false
        })
        addCase(fetchByName.pending, (state) => {
            state.loading = true
            state.error = null
        })
        addCase(fetchByName.fulfilled, (state, action) => {
            state.cocktails = action.payload
            state.loading = false
        })
        addCase(fetchById.pending, (state) => {
            state.loading = true
            state.error = null
        })
        addCase(fetchById.fulfilled, (state, action) => {
            state.cocktail = action.payload
            state.loading = false
        })

        addMatcher(isError, (state, action: AnyAction) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default cocktailsSlice.reducer

function isError(action: AnyAction) {
    return action.type.endsWith('rejected')
}

