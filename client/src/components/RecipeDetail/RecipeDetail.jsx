import react from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipeDetail } from "../../actions";
import Styles from './RecipeDetail.module.css'
import NavBar from "../NavBar/NavBar";


export default function RecipeDetail(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipeDetail(props.match.params.id));
    }, [dispatch]);

    /*     useEffect(() => {
            //your code goes here
            return () => {
                //your cleanup code codes here
    
            };
        }, []); */

    const selectedRecipe = useSelector((state) => state.recipeDetail[0])

    return (
        <div>
            <div>
                <NavBar />
            </div>
            <h1>{selectedRecipe.title}</h1>
            <img src={selectedRecipe.image} />
            <p dangerouslySetInnerHTML={{ __html: selectedRecipe.summary }}></p>
            <h3>Diets: {selectedRecipe.diets?.map(el => el + ', ')}</h3>
            <h3>Cuisines: {selectedRecipe.cuisines?.map(el => el + ', ')}</h3>
            <h3>Estimated Budget: ${selectedRecipe.price}</h3>
            <h4>Health Score: {selectedRecipe.healthScore} - Sponacular Score: {selectedRecipe.spoonacularScore}</h4>
            <h1>Steps:</h1>
            {selectedRecipe.steps?.map((el) => {
                return (
                    <div>
                        <p><b>Step {el.number}:</b> {el.step}</p>
                        <p><b>Ingredients: </b>{el.ingredients.map(el => el + ', ')}</p>
                        <p><b>Equipment: </b>{el.equipment?.map(el => el + ', ')}</p>
                    </div>
                )
            })}
        </div>
    )
}