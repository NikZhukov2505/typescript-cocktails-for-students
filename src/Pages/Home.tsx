import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchAllCocktails } from '../store/slices/cocktailsSlice';
import CocktailsCard from '../components/CocktailsCard';
import SearchForm from '../components/SearchForm';

const Home: FC = () => {
    const dispatch = useAppDispatch()
    const { cocktails, loading, error } = useAppSelector(state => state.cocktails)


    useEffect(() => {
        dispatch(fetchAllCocktails())
    }, [dispatch])

    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <SearchForm />
            {
                cocktails?.length > 0
                    ?
                    cocktails?.map(el => <CocktailsCard key={el.idDrink} {...el} />)
                    :
                    <h2>{error}</h2>
            }
        </div>
    );
};

export default Home;