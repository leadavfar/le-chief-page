/* import react from "react";
import { getRecipes, orderRecipesByName } from "../../actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";

export default function OrderFilterBar() {

    const dispatch = useDispatch();
    const [_order, setOrder] = useState('');

    function handleClickReload(e) {
        e.preventDefault();
        dispatch(getRecipes());
    };

    function handleSortName(e) {
        e.preventDefault();
        dispatch(orderRecipesByName(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordered${e.target.value}`)
    };

    return (
        <div>
            <SearchBar />
            <button onClick={e => handleClickReload(e)}>
                Reload Recipes
            </button>
            <select onChange={e => handleSortName(e)}>
                <option value='asc'>A-Z</option>
                <option value='desc'>Z-A</option>
            </select>
        </div>
    )
}; */