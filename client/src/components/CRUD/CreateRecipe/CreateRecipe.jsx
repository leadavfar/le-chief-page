import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, getCuisines, postRecipe } from "../../../actions";
import NavBar from "../../NavBar/NavBar";
import Styles from './CreateRecipe.module.css';


export default function CreateRecipe() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDiets());
        dispatch(getCuisines());
    }, [dispatch]);

    const diets = useSelector((state) => state.diets);
    const cuisines = useSelector((state) => state.cuisines);

    //STATES//
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


    function filter(e) {

    }


    function handleCheckCuisines(e) {
        setInput({
            ...input,
            cuisines: [...input.cuisines, e.target.value]
        });
        /* 
                let newArray = input.cuisines;
                let value = undefined;
                for (let i = 0; i < input.cuisines.length - 1; i++) {
                    for (let j = i + 1; j < input.cuisines.length; j++) {
                        if (input.cuisines[i] === input.cuisines[j]) {
                            value = input.cuisines[i];
                            newArray = newArray.filter((el) => el !== e.target.value);
                        }
                    }
                }
                setInput({
                    ...input,
                    cuisines: newArray
                }) */

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

    //POST RECIPE

    function handleSubmit() {
        /*         let newNumber = 1;
                for (let i = 0; i < input.steps.length; i++) {
                    input.steps[i].number = newNumber;
                    newNumber = newNumber + 1;
                } */
        dispatch(postRecipe(input))

        alert('RECIPE CREATED')
    }


    return (
        <div>
            <NavBar />
            <h1>Create Recipe</h1>

            <div className={Styles.containerFinal}>

                <form onSubmit={(e) => handleSubmit(e)}
                    className={Styles.containerForm}>

                    <div className={Styles.title}>
                        <h1>{input.title}</h1>
                    </div>

                    {/* title */}
                    <div className={Styles.field}>
                        <label> <b>Title: </b></label>
                        <input
                            type="text"
                            value={input.title}
                            name="title"
                            required="true"
                            onChange={(e) => handleOnChange(e)}
                        />
                    </div>

                    {/* image */}
                    <div className={Styles.field}>
                        <label><b>Image: </b></label>
                        <input
                            type='text'
                            name='image'
                            value={input.image}
                            onChange={(e) => handleOnChange(e)}
                        />
                    </div>

                    {/* summary */}
                    <div className={Styles.field}>
                        <p><b>Summary</b></p>
                        <textarea
                            rows={10}
                            type='text'
                            name='summary'
                            required="true"
                            value={input.summary}
                            onChange={(e) => handleOnChange(e)} />
                    </div>

                    {/* diets */}
                    <div className={Styles.field}>
                        <label><b> Diets: </b></label>
                        <div className={Styles.checks}>
                            {diets?.map((el) => {
                                return (
                                    <div>
                                        <input key={el} name={el} value={el} type="checkbox" onChange={(e) => handleCheckDiets(e)} />{el}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* price */}
                    <div className={Styles.field}>
                        <label><b>Price: </b></label>
                        <input
                            type='text'
                            name='price'
                            required="true"
                            value={input.price}
                            onChange={(e) => handleOnChange(e)} />
                    </div>

                    {/* cuisines */}
                    <div className={Styles.field}>
                        <label><b>Cuisines: </b></label>
                        <div className={Styles.checks}>
                            {cuisines?.map((el) => {
                                return (
                                    <div>
                                        <input key={el} name={el} value={el} type="checkbox" onChange={(e) => handleCheckCuisines(e)} />{el}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* spoonacular score */}
                    <div className={Styles.field}>
                        <label><b>Spoonacular Score: </b></label>
                        <input
                            type="text"
                            value={input.spoonacularScore}
                            name="spoonacularScore"
                            required="true"
                            onChange={(e) => handleOnChange(e)}
                        />
                    </div>

                    {/* health score */}
                    <div className={Styles.field}>
                        <label><b>Health Score: </b></label>
                        <input
                            type="text"
                            value={input.healthScore}
                            name="healthScore"
                            required="true"
                            onChange={(e) => handleOnChange(e)}
                        />
                    </div>

                    {/* steps */}

                    <div className={Styles.field}>
                        <hr />
                        <form>
                            <h2>Steps</h2>
                            <p><b>Description </b></p>
                            <textarea
                                rows={5}
                                required='true'
                                type='text'
                                name='step'
                                value={inputSteps.step}
                                onChange={(e) => handleStepsOnChange(e)} />

                            <form className={Styles.field}>
                                <label><b>Ingredients: </b></label>
                                <input
                                    required='true'
                                    type='text'
                                    name='ingredientValue'
                                    value={stepsValues.ingredientValue}
                                    onChange={(e) => handleStepsValuesOnChange(e)} />
                                <button onClick={(e) => insertIngredientValue(e)}>Add Ingredient</button>
                            </form>

                            <form className={Styles.field}>
                                <label><b>Equipment: </b></label>
                                <input
                                    required='true'
                                    type='text'
                                    name='equipmentValue'
                                    value={stepsValues.equipmentValue}
                                    onChange={(e) => handleStepsValuesOnChange(e)} />
                                <button onClick={(e) => insertEquipmentValue(e)}>Add Equipment</button>
                            </form>

                            <div className={Styles.addButtonContainer}>
                                <button className={Styles.addStep} onClick={(e) => insertStep(e)}>Add Step</button>
                            </div>

                        </form>
                    </div>
                    <div>
                        {input.steps?.map((el) => {
                            return (
                                <div className={Styles.step}>
                                    <p><b>Step {el.number}</b></p>
                                    <p><b>Description: </b>{el.step}</p>
                                    {el.ingredients?.length > 0 ? <p><b>Ingredients: </b>{el.ingredients.map(el => el + ', ')}</p> : null}
                                    {el.equipment?.length > 0 ? <p><b>Equipment: </b>{el.equipment.map(el => el + ', ')}</p> : null}
                                    <div className={Styles.buttonDelete}>
                                        <button onClick={() => deleteStep(el)}>x</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={Styles.createButton}>
                        <button className={Styles.create} type="submit">CREATE</button>
                    </div>
                </form>
            </div>
        </div >
    )
}