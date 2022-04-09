import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getRecipes, getDiets, getCuisines, orderRecipesByName, orderRecipesByPrice,
    filterRecipesByCuisine, filterRecipesByDiets, filterRecipesByOrigin
} from '../../actions/index';
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import Paged from "../Paged/Paged";
import Styles from './Recipes.module.css';
import RecipeCard from "../RecipeCard/RecipeCard";
import Foot from "../Foot/Foot";

export default function Recipes() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipes());
        dispatch(getDiets());
        dispatch(getCuisines());
    }, [dispatch]);


    const recipes = useSelector((state) => state.recipes);
    const allRecipes = useSelector((state) => state.allRecipes);
    const diets = useSelector((state) => state.diets);
    const cuisines = useSelector((state) => state.cuisines);

    //paged resources 
    const [order, setOrder] = useState('');
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
        setOrder(`Ordered${e.target.value}`)
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

    function handleFilterByDiet(e) {
        e.preventDefault();
        dispatch(filterRecipesByDiets(e.target.value))
        setCurrentPage(1);
    };

    function handleFilterByOrigin(e) {
        e.preventDefault();
        dispatch(filterRecipesByOrigin(e.target.value))
        setCurrentPage(1);
    };

    return (
        <div className={Styles.container_all}>
            {/* Navbar */}
            <div>
                <NavBar />
            </div>


            <div className={Styles.filters_recipes}>

                {/* Filters, orders and search */}
                <div className={Styles.filters_container}>

                    {/* Title */}
                    <div>
                        <h1>Recipes</h1>
                    </div>

                    <SearchBar />
                    <button onClick={e => handleClickReload(e)}>
                        Reload Recipes
                    </button>

                    {/* ORDEN ALFABETICO */}
                    <select onChange={e => handleSortName(e)}>
                        <option value="" selected disabled hidden>Name</option>
                        <option value='asc'>A-Z</option>
                        <option value='desc'>Z-A</option>
                    </select>

                    {/* ORDEN POR PRECIO */}
                    <select onChange={e => handleSortPrice(e)}>
                        <option value="" selected disabled hidden>Budget $</option>
                        <option value='low'>Low to High</option>
                        <option value='high'>High to Low</option>
                    </select>

                    {/* FILTRO POR COCINAS */}
                    <select onChange={e => handleFilterByCuisine(e)}>
                        <option value="" selected disabled hidden>Cuisines</option>
                        <option value='all'>All</option>
                        {cuisines?.map((el) => {
                            return (
                                <option value={el}>{el}</option>
                            )
                        })}
                    </select>

                    {/* FILTRO POR DIETAS */}
                    <select onChange={e => handleFilterByDiet(e)}>
                        <option value="" selected disabled hidden>Diets</option>
                        <option value='all'>All</option>
                        {diets?.map((el) => {
                            return (
                                <option value={el}>{el}</option>
                            )
                        })}
                    </select>

                    {/* FILTRO POR CREADOR */}
                    <select onChange={e => handleFilterByOrigin(e)}>
                        <option value="" selected disabled hidden>Origin</option>
                        <option value='all'>All</option>
                        <option value='users'>Users</option>
                        <option value='spoonacular'>Spoonacular</option>
                    </select>
                </div>

                <div>
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
                    <div>
                        <Paged
                            className={Styles.paged}
                            recipesInPage={recipesInPage}
                            recipes={recipes.length}
                            paged={paged} />
                    </div>
                </div>
            </div>
            <div>
                <Foot />
            </div>
        </div>


    );
};