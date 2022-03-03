import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from '../../actions/index';
import NavBar from "../NavBar/NavBar";
import Styles from './Recipes.module.css';
import RecipeCard from "../RecipeCard/RecipeCard";
import RecipeDetail from "../RecipeDetail/RecipeDetail";
export default function Recipes() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipes());
    }, [dispatch]);

    const allRecipes = useSelector((state) => state.recipes);

    console.log('RECIPES: ', allRecipes)

    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <h1>BRIANA APP</h1>
            </div>
            <div className={Styles.recipe_container}>
                {allRecipes.map((el) => {
                    return (
                        <div>
                            <RecipeCard title={el.title} image={el.image} diets={el.diets} id={el._id} />
                        </div>
                    )
                })}
            </div>

        </div>
    );
};