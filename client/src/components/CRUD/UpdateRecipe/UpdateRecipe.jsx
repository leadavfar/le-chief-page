import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getDiets, getCuisines, putRecipe, getRecipeDetail } from "../../../actions";
import NavBar from "../../NavBar/NavBar";




export default function UpdateRecipe(props) {

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipeDetail(props.match.params.id));
        dispatch(getDiets());
        dispatch(getCuisines());
    }, [dispatch]);



    const diets = useSelector((state) => state.diets);
    const cuisines = useSelector((state) => state.cuisines);
    const selectedRecipe = useSelector((state) => state.recipeDetail)
    console.log('RECIPE: ', selectedRecipe[0], 'ID: ', selectedRecipe[0]?._id)

    //STATES//
    /*         const [input, setInput] = useState({
                title: selectedRecipe[0]?.title,
                image: selectedRecipe[0]?.image,
                summary: selectedRecipe[0]?.summary,
                diets: selectedRecipe[0]?.diets,
                cuisines: selectedRecipe[0]?.cuisines,
                steps: selectedRecipe[0]?.steps,
                price: selectedRecipe[0]?.price,
                spoonacularScore: selectedRecipe[0]?.spoonacularScore,
                healthScore: selectedRecipe[0]?.healthScore
            }); */

    const [input, setInput] = useState({
        title: '',
        image: '',
        summary: '',
        diets: [],
        cuisines: [],
        steps: [],
        price: '',
        spoonacularScore: '',
        healthScore: ''
    });

    const [inputSteps, setInputSteps] = useState({
        number: 1,
        step: '',
        ingredients: [],
        equipment: []
    });

    const [stepsValues, setStepsValues] = useState({
        ingredientValue: '',
        equipmentValue: ''
    });

    useEffect(() => {
        setInput({
            title: selectedRecipe[0]?.title,
            image: selectedRecipe[0]?.image,
            summary: selectedRecipe[0]?.summary,
            diets: selectedRecipe[0]?.diets,
            cuisines: selectedRecipe[0]?.cuisines,
            steps: selectedRecipe[0]?.steps,
            price: selectedRecipe[0]?.price,
            spoonacularScore: selectedRecipe[0]?.spoonacularScore,
            healthScore: selectedRecipe[0]?.healthScore
        })
    }, [setInput, selectedRecipe])

    //SET INPUTS//
    function handleOnChange(e) {
        console.log(input)
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    };

    function handleStepsOnChange(e) {
        console.log(inputSteps)
        setInputSteps({
            ...inputSteps,
            [e.target.name]: e.target.value
        })
    };

    function handleStepsValuesOnChange(e) {
        console.log(stepsValues)
        setStepsValues({
            ...stepsValues,
            [e.target.name]: e.target.value
        })
    };

    //INSERT TO ARRAYS
    function handleCheckDiets(e) {
        setInput({
            ...input,
            diets: [...input.diets, e.target.value]
        })
    };


    /*     function filter(e) {
    
        } */


    function handleCheckCuisines(e) {
        setInput({
            ...input,
            cuisines: [...input.cuisines, e.target.value]
        });
    };

    /*     function handleDelete(el) {
            setInput({
                ...input,
                diets: input.diets.filter(occ => occ !== el)
            })
        }
     */

    function insertEquipmentValue(e) {
        console.log(inputSteps)
        setInputSteps({
            ...inputSteps,
            equipment: [...inputSteps.equipment, stepsValues.equipmentValue]
        });
        setStepsValues({
            ...stepsValues,
            equipmentValue: ''
        });
    };

    function insertIngredientValue(e) {
        console.log(inputSteps)
        setInputSteps({
            ...inputSteps,
            ingredients: [...inputSteps.ingredients, stepsValues.ingredientValue]
        });
        setStepsValues({
            ...stepsValues,
            ingredientValue: ''
        });
    };

    function insertStep(e) {
        e.preventDefault(e)
        setInput({
            ...input,
            steps: [...input.steps, inputSteps]
        })
        setInputSteps({
            number: inputSteps.number + 1,
            step: '',
            ingredients: [],
            equipment: []
        });
    };

    function deleteStep(step) {
        setInput({
            ...input,
            steps: input.steps.filter((el) => el !== step)
        });
    };

    //PUT RECIPE
    function handleSubmit() {
        /*         let newNumber = 1;
                for (let i = 0; i < input.steps.length; i++) {
                    input.steps[i].number = newNumber;
                    newNumber = newNumber + 1;
                } */
        history.push('/crud')
        const id = selectedRecipe[0]?._id;
        dispatch(putRecipe(id, input))

        alert('RECIPE UPDATED')
    }


    return (
        <div>
            <NavBar />
            <h1>Create Recipe</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
                {/* title */}
                <div>

                    <label>Title:</label>
                    <input
                        type="text"
                        value={input.title}
                        name="title"
                        required="true"
                        onChange={(e) => handleOnChange(e)}
                    />
                </div>

                {/* image */}
                <div>
                    <label>Image:</label>
                    <input
                        type='text'
                        name='image'
                        value={input.image}
                        onChange={(e) => handleOnChange(e)}
                    />
                </div>

                {/* summary */}
                <div>
                    <label>Summary:</label>
                    <textarea
                        rows={10}
                        type='text'
                        name='summary'
                        required="true"
                        value={input.summary}
                        onChange={(e) => handleOnChange(e)} />
                </div>

                {/* diets */}
                <div>
                    <label>Diets:</label>
                    {diets?.map((el) => {
                        return (
                            <div>
                                <input key={el} name={el} value={el} type="checkbox" onChange={(e) => handleCheckDiets(e)} />{el}
                            </div>
                        )
                    })}
                </div>

                {/* steps */}
                <div>
                    <form>
                        <label>Step:</label>
                        <textarea
                            rows={5}
                            required='true'
                            type='text'
                            name='step'
                            value={inputSteps.step}
                            onChange={(e) => handleStepsOnChange(e)} />

                        <form>
                            <label>Ingredients: </label>
                            <input
                                required='true'
                                type='text'
                                name='ingredientValue'
                                value={stepsValues.ingredientValue}
                                onChange={(e) => handleStepsValuesOnChange(e)} />
                            <button onClick={(e) => insertIngredientValue(e)}>Add Ingredient</button>
                        </form>

                        <form>
                            <label>Equipment:</label>
                            <input
                                required='true'
                                type='text'
                                name='equipmentValue'
                                value={stepsValues.equipmentValue}
                                onChange={(e) => handleStepsValuesOnChange(e)} />
                            <button onClick={(e) => insertEquipmentValue(e)}>Add Equipment</button>
                        </form>

                        <button onClick={(e) => insertStep(e)}>Add Step</button>
                    </form>
                </div>
                <div>
                    <ol>
                        {input.steps?.map((el) => {
                            return (
                                <li><div>
                                    <p>{el.step}</p>
                                    {el.ingredients?.length > 0 ? <p><b>Ingredients: </b>{el.ingredients.map(el => el + ', ')}</p> : null}
                                    {el.equipment?.length > 0 ? <p><b>Equipment: </b>{el.equipment.map(el => el + ', ')}</p> : null}
                                    <button onClick={() => deleteStep(el)}>x</button>
                                </div></li>)

                        })}
                    </ol>
                </div>
                {/* price */}
                <div>
                    <label>Price: </label>
                    <input
                        type='text'
                        name='price'
                        required="true"
                        value={input.price}
                        onChange={(e) => handleOnChange(e)} />
                </div>

                {/* cuisines */}
                <div>
                    <label>Cuisines: </label>

                    {cuisines?.map((el) => {
                        return (
                            <div>
                                <input key={el} name={el} value={el} type="checkbox" onChange={(e) => handleCheckCuisines(e)} />{el}
                            </div>
                        )
                    })}
                </div>

                {/* spoonacular score */}
                <div>
                    <label>Spoonacular Score: </label>
                    <input
                        type="text"
                        value={input.spoonacularScore}
                        name="spoonacularScore"
                        required="true"
                        onChange={(e) => handleOnChange(e)}
                    />
                </div>

                {/* health score */}
                <div>
                    <label>Health Score: </label>
                    <input
                        type="text"
                        value={input.healthScore}
                        name="healthScore"
                        required="true"
                        onChange={(e) => handleOnChange(e)}
                    />
                </div>

                <button type="submit">Update</button>
            </form>
        </div >
    )
}