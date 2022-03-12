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

    const selectedRecipe = useSelector((state) => state.recipeDetail)

    console.log(selectedRecipe[0])

    return (
        <div>
            <div>
                <NavBar />
            </div>
            <h1>{selectedRecipe[0]?.title}</h1>
            <img src={selectedRecipe[0]?.image} />
            <p dangerouslySetInnerHTML={{ __html: selectedRecipe[0]?.summary }}></p>
            <h3>Diets: {selectedRecipe[0]?.diets?.map(el => el + ', ')}</h3>
            <h3>Cuisines: {selectedRecipe[0]?.cuisines?.map(el => el + ', ')}</h3>
            <h3>Estimated Budget: ${selectedRecipe[0]?.price}</h3>
            <h4>Health Score: {selectedRecipe[0]?.healthScore} - Sponacular Score: {selectedRecipe[0]?.spoonacularScore}</h4>
            <h1>Steps:</h1>
            {selectedRecipe[0]?.steps?.map((el) => {
                return (
                    <div>
                        <p><b>Step {el.number}:</b> {el.step}</p>
                        {el.ingredients?.length > 0 ? <p><b>Ingredients: </b>{el.ingredients.map(el => el + ', ')}</p> : null}
                        {el.equipment?.length > 0 ? <p><b>Equipment: </b>{el.equipment.map(el => el + ', ')}</p> : null}
                    </div>
                )
            })}
        </div>
    )
}