import axios from 'axios';

export function getRecipes() {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3002/recipes/all-recipes');
        return dispatch({
            type: 'GET_RECIPES',
            payload: json.data
        })
    }
}

export function getRecipeDetail(id) {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3002/recipes/all-recipes/' + id);
        return dispatch({
            type: 'GET_RECIPE_DETAIL',
            payload: json.data
        })
    }
}