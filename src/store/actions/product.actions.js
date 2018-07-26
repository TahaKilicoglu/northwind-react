import ProductsApi from '../../rest/products.api';

/*
 * action types
 */
export const UPDATE_CATEGORY_REQUEST = 'categories/UPDATE_CATEGORY_REQUEST';
export const UPDATE_CATEGORY_SUCCESS = 'categories/UPDATE_CATEGORY_SUCCESS';
export const UPDATE_CATEGORY_FAIL = 'categories/UPDATE_CATEGORY_FAIL';

export const GET_PRODUCT = 'products/GET_PRODUCT';

export const LIST_PRODUCTS_REQUEST = 'products/LIST_PRODUCTS_REQUEST';
export const LIST_PRODUCTS_SUCCESS = 'products/LIST_PRODUCTS_SUCCESS';
export const LIST_PRODUCTS_FAIL = 'products/LIST_PRODUCTS_FAIL';

export const DELETE_PRODUCT_REQUEST = 'products/DELETE_PRODUCT_REQUEST';
export const DELETE_PRODUCT_SUCCESS = 'products/DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAIL = 'products/DELETE_PRODUCT_FAIL';

export const UPDATE_PRODUCT_REQUEST = 'products/UPDATE_PRODUCT_REQUEST';
export const UPDATE_PRODUCT_SUCCESS = 'products/UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAIL = 'products/UPDATE_PRODUCT_FAIL';

/*
 * other
 */

const productsApi = new ProductsApi();

/*
 * action creators
 */
export function loadProducts() {
    return function apiListProducts(dispatch) {
        console.log('Load Products');
        return productsApi.list()
            .then(res => {
                const products = res.data;
                console.log('Products', products.length);
                dispatch(loadProductsSuccess(products));
            })
            .catch(error => {
                dispatch(loadProductsFail(error));
            });
    };
};

export function loadProductsSuccess(products) {
    return {
        type: LIST_PRODUCTS_SUCCESS,
        products
    };
};

export function loadProductsFail(error) {
    return {
        type: LIST_PRODUCTS_FAIL,
        error
    };
};


export function getProduct(error) {
    return {
        type: GET_PRODUCT,
        error
    };
};