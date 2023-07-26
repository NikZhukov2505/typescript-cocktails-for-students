export interface CocktailProps {
    strDrink: string
    strDrinkThumb: string
    idDrink: string
}

export type CocktailDetail = {
    strDrink: string
    strDrinkThumb: string
    idDrink: string
    strInstructions?: string | null
    strIngredient1?: string | null
    strIngredient2?: string | null
    strIngredient3?: string | null
    strIngredient4?: string | null
}