import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../NavBar/NavBar";

export default function CreateRecipe() {

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
        number: undefined,
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

    function handleSelect(e) {
        setInput({
            ...input,
            diets: [...input.diets, e.target.value]
        })
    };

    function insertEquipmentValue(e) {
        console.log(inputSteps)
        setInputSteps({
            ...inputSteps,
            equipment: [...inputSteps.equipment, stepsValues.equipmentValue]
        });
        setStepsValues({
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
            ingredientValue: ''
        });
    };


    //SHOW DATA
    function showFormData(e) {
        input.steps = [inputSteps];
        console.log('ALL DATA: ', input)
    }

    return (
        <div>
            <NavBar />
            <h1>Create Recipe</h1>


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
                <input name="diets" value='vegan' type="checkbox" onChange={(e) => handleSelect(e)} />Vegan
                <input name="diets" value='lacto' type="checkbox" onChange={(e) => handleSelect(e)} />Lacto
                <input name="cbipeliculas" type="checkbox" />Dairy Free
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
                </form>
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
                <select>
                    <option value="" selected disabled hidden>Cuisines</option>
                    <option >cosita</option>
                    <option >coso</option>
                </select>
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

            <button onClick={(e) => showFormData(e)}>SHOW IT!</button>

        </div>
    )
}