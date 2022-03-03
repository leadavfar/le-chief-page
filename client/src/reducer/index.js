const initialState = {
    recipes: [],
    allRecipes: [],
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

        case "GET_RECIPE_DETAIL":
            return {
                ...state,
                recipeDetail: action.payload
            };

        default:
            return state;
    };
};

export default rootReducer;