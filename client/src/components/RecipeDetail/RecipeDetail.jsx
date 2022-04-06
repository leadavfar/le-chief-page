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

            <div className={Styles.container}>
                <div className={Styles.background}>
                    <div className={Styles.recipe}>

                        <div className={Styles.image}>
                            <h1>{selectedRecipe[0]?.title}</h1>
                            <img src={selectedRecipe[0]?.image}/>
                        </div>

                        <div className={Styles.summary}>
                            <p dangerouslySetInnerHTML={{ __html: selectedRecipe[0]?.summary }}></p>
                        </div>

                        <hr />

                        <div className={Styles.steps}>

                            <div className={Styles.features}>
                                <p><b>Diets: </b>{selectedRecipe[0]?.diets?.map(el => el + ', ')}</p>
                                <p><b>Cuisines: </b>{selectedRecipe[0]?.cuisines?.map(el => el + ', ')}</p>
                                <p><b>Estimated Budget: </b>${selectedRecipe[0]?.price}</p>
                                <p><b>Health Score: </b>{selectedRecipe[0]?.healthScore}</p>
                                <p><b>Sponacular Score: </b>{selectedRecipe[0]?.spoonacularScore}</p>
                            </div>

                            <hr />

                            <h1>Steps</h1>
                            {selectedRecipe[0]?.steps?.map((el) => {
                                return (
                                    <div className={Styles.step}>
                                        <p><b>Step {el.number}</b></p>
                                        <p><b>Description: </b>{el.step}</p>
                                        {el.ingredients?.length > 0 ? <p><b>Ingredients: </b>{el.ingredients.map(el => el + ', ')}</p> : null}
                                        {el.equipment?.length > 0 ? <p><b>Equipment: </b>{el.equipment.map(el => el + ', ')}</p> : null}
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}