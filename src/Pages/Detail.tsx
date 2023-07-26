import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchById } from '../store/slices/cocktailsSlice';

const Detail: FC = () => {
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const { cocktail } = useAppSelector(state => state.cocktails)

    // const setIngredient = () => {
    //     for (let key in cocktail) {
    //         if (key.includes('strIingredient')) {
    //             return <li>{cocktail[key]}</li>
    //         }
    //     }
    // }

    useEffect(() => {
        if (id) {
            dispatch(fetchById(id))
        }
    }, [dispatch, id])

    return (
        <div>
            <img src={cocktail?.strDrinkThumb} alt={cocktail?.strDrink} />
            <h1>{cocktail?.strDrink}</h1>
            <p>{cocktail?.strInstructions}</p>
            <ul>

            </ul>
        </div>
    );
};

export default Detail;