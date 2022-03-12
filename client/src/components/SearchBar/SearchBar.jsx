import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipesByTitle } from "../../actions";
/* import { useHistory } from "react-router-dom"; */

import Styles from "./SearchBar.module.css";

export default function SearchBar() {
    /* const history = useHistory(); */
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    function handleInputChange(e) {
        e.preventDefault();
        setTitle(e.target.value);
    };

    function handleSubmit(e) {
        /* history.push('/recipes') */
        e.preventDefault();
        dispatch(getRecipesByTitle(title));
        setTitle('');
    };

    return (
        <div>
            <input
                value={title}
                type='text'
                placeholder="Search Recipe..."
                onChange={(e) => handleInputChange(e)} />
            <button
                type="submit"
                onClick={(e) => handleSubmit(e)}>
                Search
            </button>
        </div>
    )
}