import axios from 'axios';

const webLink = 'https://le-chief-page-api.herokuapp.com/';
const localLink = 'http://localhost:3002/';



export function getRecipes() {
    return async function (dispatch) {
        var json = await axios.get(localLink + 'recipes/all-recipes');
        return dispatch({
            type: 'GET_RECIPES',
            payload: json.data
        })
    }
}

export function getUsersRecipes() {
    return async function (dispatch) {
        var json = await axios.get(localLink + 'recipes/users-recipes');
        return dispatch({
            type: 'GET_USERS_RECIPES',
            payload: json.data
        })
    }
}

export function getDiets() {
    return async function (dispatch) {
        var json = await axios.get(localLink + 'diets');
        return dispatch({
            type: 'GET_DIETS',
            payload: json.data
        })
    }
}

export function getCuisines() {
    return async function (dispatch) {
        var json = await axios.get(localLink + 'cuisines');
        return dispatch({
            type: 'GET_CUISINES',
            payload: json.data
        })
    }
}

export function getRecipesByTitle(title) {
    return async function (dispatch) {
        var json = await axios.get(localLink + 'recipes/all-recipes?title=' + title);
        return dispatch({
            type: 'GET_RECIPES_BY_TITLE',
            payload: json.data
        })
    }
}

export function getRecipeDetail(id) {
    return async function (dispatch) {
        var json = await axios.get(localLink + 'recipes/all-recipes/' + id);
        return dispatch({
            type: 'GET_RECIPE_DETAIL',
            payload: json.data
        })
    }
}

export function orderRecipesByName(payload) {
    return async function (dispatch) {
        return dispatch({
            type: 'ORDER_RECIPES_BY_NAME',
            payload
        })
    }
}

export function orderRecipesByPrice(payload) {
    return async function (dispatch) {
        return dispatch({
            type: 'ORDER_RECIPES_BY_PRICE',
            payload
        })
    }
}

export function filterRecipesByCuisine(payload) {
    return async function (dispatch) {
        return dispatch({
            type: 'FILTER_RECIPES_BY_CUISINE',
            payload
        })
    }
}

export function filterRecipesByDiets(payload) {
    return async function (dispatch) {
        return dispatch({
            type: 'FILTER_RECIPES_BY_DIETS',
            payload
        })
    }
}

export function filterRecipesByOrigin(payload) {
    return async function (dispatch) {
        return dispatch({
            type: 'FILTER_RECIPES_BY_ORIGIN',
            payload
        })
    }
}

export function postRecipe(payload) {
    return async function (dispatch) {
        const json = await axios.post(localLink + 'post-user-recipe', payload);
        return dispatch({
            type: 'POST_RECIPE',
            payload: json
        })
    }
}

export function putRecipe(id, payload) {
    return async function (dispatch) {
        const json = await axios.put(localLink + 'recipes/put-user-recipe/' + id, payload);
        return dispatch({
            type: 'PUT_RECIPE',
            payload: json
        })
    }
}

export function deleteRecipe(id) {
    return async function (dispatch) {
        const json = await axios.delete(localLink + 'recipes/delete-user-recipe/' + id);
        return dispatch({
            type: 'DELETE_RECIPE',
            payload: json
        })
    }
}