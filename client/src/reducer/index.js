const initialState = {
    recipes: [],
    allRecipes: [],
    usersRecipes: [],
    diets: [],
    cuisines: [],
    recipeDetail: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_RECIPES":
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            };

        case "GET_USERS_RECIPES":
            return {
                ...state,
                usersRecipes: action.payload
            };

        case "GET_DIETS":
            return {
                ...state,
                diets: action.payload
            };

        case "GET_CUISINES":
            return {
                ...state,
                cuisines: action.payload
            };

        case "GET_RECIPES_BY_TITLE":
            return {
                ...state,
                recipes: action.payload
            };

        case "GET_RECIPE_DETAIL":
            return {
                ...state,
                recipeDetail: action.payload
            };

        case "FILTER_RECIPES_BY_CUISINE":
            const filteredByCuisine = action.payload === 'all' ? state.allRecipes : state.allRecipes.filter(el => el.cuisines.find(el => el === action.payload));
            return {
                ...state,
                recipes: filteredByCuisine
            };

        case "FILTER_RECIPES_BY_DIETS":
            const filteredByDiets = action.payload === 'all' ? state.allRecipes : state.allRecipes.filter(el => el.diets.find(el => el === action.payload));
            return {
                ...state,
                recipes: filteredByDiets
            };

        case "FILTER_RECIPES_BY_ORIGIN":
            let filteredByOrigin = [];
            /*             action.payload === 'spoonacular' ? state.allRecipes.filter(el => el.origin === 'Spoonacular') : state.allRecipes.filter(el => el.origin != 'Spoonacular');
             */
            if (action.payload === 'spoonacular') {
                filteredByOrigin = state.allRecipes.filter(el => el.origin === 'Spoonacular');
            } else if (action.payload === 'users') {
                filteredByOrigin = state.allRecipes.filter(el => el.origin === 'User');
            }
            return {
                ...state,
                recipes: action.payload === 'all' ? state.allRecipes : filteredByOrigin
            };

        case "ORDER_RECIPES_BY_NAME":
            let sortedArr = action.payload === 'asc' ?
                state.recipes.sort(function (a, b) {
                    if (a.title > b.title) {
                        return 1;
                    }
                    if (b.title > a.title) {
                        return -1;
                    }
                    return 0;
                }) :
                state.recipes.sort(function (a, b) {
                    if (a.title > b.title) {
                        return -1;
                    }
                    if (b.title > a.title) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                recipes: sortedArr
            };

        case "ORDER_RECIPES_BY_PRICE":
            let sortedArrPrice = action.payload === 'high' ?
                state.recipes.sort(function (a, b) {
                    if (a.title > b.title) {
                        return 1;
                    }
                    if (b.title > a.title) {
                        return -1;
                    }
                    return 0;
                }) :
                state.recipes.sort(function (a, b) {
                    if (a.title > b.title) {
                        return -1;
                    }
                    if (b.title > a.title) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                recipes: sortedArrPrice
            };

        case "POST_RECIPE":
            return {
                ...state
            };

            case "PUT_RECIPE":
            return {
                ...state
            };

        case "DELETE_RECIPE":
            return {
                ...state
            };

        default:
            return state;
    };
};

export default rootReducer;