import {
    LIST_PRODUCTS_SUCCESS,
    GET_PRODUCT,
    DELETE_PRODUCT_SUCCESS
} from '../actions/product.actions';

const productsReducer = function productsReducer(currentState = [], action) {
    let state = currentState;
    if (action.type.startsWith('products/')) {
        switch (action.type) {
            case LIST_PRODUCTS_SUCCESS:
                state = action.products;
                break;
            case GET_PRODUCT:
                break;
            case DELETE_PRODUCT_SUCCESS:
                state = state.filter(model => model.id !== action.id);
                break;
            default:
                break;
        }
    }
    return state;
}

export default productsReducer;