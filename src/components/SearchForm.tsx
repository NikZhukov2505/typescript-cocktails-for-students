import React,
{
    FC,
    useState,
    ChangeEventHandler,
    FormEventHandler
} from 'react';
import { useAppDispatch } from '../hooks';
import { fetchByName } from '../store/slices/cocktailsSlice';

const SearchForm: FC = () => {
    const [name, setName] = useState('')
    const dispatch = useAppDispatch()

    const updateText: ChangeEventHandler<HTMLInputElement> = (e) => {
        setName(e.target.value)
    }

    const submitSearch: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        dispatch(fetchByName(name))
    }
    return (
        <form onSubmit={submitSearch}>
            <input onChange={updateText} value={name} type="text" placeholder='Cocktail name' />
            <button>Search</button>
        </form>
    );
};

export default SearchForm;