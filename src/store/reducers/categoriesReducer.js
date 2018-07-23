import {
    LIST_CATEGORIES_SUCCESS,
    GET_CATEGORY,
    DELETE_CATEGORY_SUCCESS
} from '../actions/northwindActions';

const categoriesReducer = function categoriesReducer(currentState = [], action) {
    let state = currentState;
    if (action.type.startsWith('categories/')) {
        switch (action.type) {
            case LIST_CATEGORIES_SUCCESS:
                state = action.categories;
                break;
            case GET_CATEGORY:
                break;
            case DELETE_CATEGORY_SUCCESS:
                state = state.filter(model => model.id !== action.id);
                break;
            default:
                break;
        }
    }
    return state;
}

export default categoriesReducer;