import axios from "axios";


const instanse = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/',
    headers: {
        "Content-Type": "application/json",
    }
})

export const cocktailsAPI = {
    getAllCocktails() {
        return instanse.get('filter.php?c=Cocktail')
    },
    getByName(name: string) {
        return instanse.get(`search.php?s=${name}`)
    },
    getById(id: string) {
        return instanse.get(`lookup.php?i=${id}`)
    }
}