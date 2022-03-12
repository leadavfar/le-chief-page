import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, orderRecipesByName, orderRecipesByPrice, filterRecipesByCuisine, filterRecipesByDiets, filterRecipesByOrigin } from '../../actions/index';
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import Paged from "../Paged/Paged";
import Styles from './Recipes.module.css';
import RecipeCard from "../RecipeCard/RecipeCard";
export default function Recipes() {

    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes);
    const allRecipes = useSelector((state) => state.allRecipes);
    const [order, setOrder] = useState('');

    useEffect(() => {
        dispatch(getRecipes());
    }, [dispatch]);

    //paged resources 
    const [currentPage, setCurrentPage] = useState(1);
    const [recipesInPage, setRecipesInPage] = useState(12);
    const indexOfLastRecipe = currentPage * recipesInPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesInPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
    const paged = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    function handleClickReload(e) {
        e.preventDefault();
        dispatch(getRecipes());
    };

    function handleSortName(e) {
        e.preventDefault();
        dispatch(orderRecipesByName(e.target.value));
        setCurrentPage(1);

    }

    function handleSortPrice(e) {
        e.preventDefault();
        dispatch(orderRecipesByPrice(e.target.value))
        setCurrentPage(1);
        setOrder(`Ordered${e.target.value}`)
    };

    function handleFilterByCuisine(e) {
        e.preventDefault();
        dispatch(filterRecipesByCuisine(e.target.value))
        setCurrentPage(1);
    };

    function handleFilterByOrigin(e) {
        e.preventDefault();
        dispatch(filterRecipesByOrigin(e.target.value))
        setCurrentPage(1);
    };



    console.log('RECIPES: ', recipes.length)

    return (
        <div>
            {/* Navbar */}
            <div>
                <NavBar />
            </div>

            {/* Filters, orders and search */}
            <div>
                <SearchBar />
                <button onClick={e => handleClickReload(e)}>
                    Reload Recipes
                </button>

                <select onChange={e => handleSortName(e)}>
                    <option value='asc'>A-Z</option>
                    <option value='desc'>Z-A</option>
                </select>

                <select onChange={e => handleSortPrice(e)}>
                    <option value='low'>Low to High</option>
                    <option value='high'>High to Low</option>
                </select>

                <select onChange={e => handleFilterByCuisine(e)}>
                    <option value='all'>All</option>
                    {allRecipes?.map((el) => {
                        if (el.cuisines.length > 0) {
                            return (
                                <option value={el.cuisines}>{el.cuisines}</option>
                            )
                        }
                    })}
                </select>

                <select onChange={e => handleFilterByOrigin(e)}>
                    <option value='all'>All</option>
                    <option value='users'>Users</option>
                    <option value='spoonacular'>Spoonacular</option>
                </select>
            </div>

            {/* Title */}
            <div>
                <h1>Recipes</h1>
            </div>

            {/* Recipes render */}
            <div className={Styles.recipe_container}>
                {currentRecipes?.map((el) => {
                    return (
                        <div key={el._id}>
                            <RecipeCard title={el.title} image={el.image} diets={el.diets} price={el.price} id={el._id} />
                        </div>
                    )
                })}
            </div>

            {/* Paged */}
            <Paged
                recipesInPage={recipesInPage}
                recipes={recipes.length}
                paged={paged} />
        </div>
    );
};