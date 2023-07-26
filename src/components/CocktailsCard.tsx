import React, { FC } from 'react';
import { CocktailProps } from '../store/interfaces';
import { Link } from 'react-router-dom'


const CocktailsCard: FC<CocktailProps> = ({ strDrink, strDrinkThumb, idDrink }) => {
    return (
        <div>
            <Link to={`/drink/${idDrink}`}>
                <img width={200} src={strDrinkThumb} alt={strDrink} />
                <h2 title={strDrink}>{strDrink.length > 25 ? `${strDrink.slice(0, 20)}...` : strDrink}</h2>
            </Link>
        </div>
    );
};

export default CocktailsCard;