import CategoriesApi from '../../rest/categoriesApi';

/*
 * action types
 */
export const LIST_CATEGORIES_REQUEST = 'categories/LIST_CATEGORIES_REQUEST';
export const LIST_CATEGORIES_SUCCESS = 'categories/LIST_CATEGORIES_SUCCESS';
export const LIST_CATEGORIES_FAIL = 'categories/LIST_CATEGORIES_FAIL';

export const DELETE_CATEGORY_REQUEST = 'categories/DELETE_CATEGORY_REQUEST';
export const DELETE_CATEGORY_SUCCESS = 'categories/DELETE_CATEGORY_SUCCESS';
export const DELETE_CATEGORY_FAIL = 'categories/DELETE_CATEGORY_FAIL';

export const UPDATE_CATEGORY_REQUEST = 'categories/UPDATE_CATEGORY_REQUEST';
export const UPDATE_CATEGORY_SUCCESS = 'categories/UPDATE_CATEGORY_SUCCESS';
export const UPDATE_CATEGORY_FAIL = 'categories/UPDATE_CATEGORY_FAIL';

export const GET_CATEGORY = 'categories/GET_CATEGORY';

/*
 * other
 */

const categoriesApi = new CategoriesApi();

/*
 * action creators
 */
export function loadCategories() {
    return function apiListCategories(dispatch) {
        return categoriesApi.list()
            .then(res => {
                console.log('apiListCategories', { categories: res.data });
                dispatch(loadCategoriesSuccess(res.data));
            })
            .catch(error => {
                dispatch(loadCategoriesFail(error));
            });
    };

};

export function loadCategoriesSuccess(categories) {
    return {
        type: LIST_CATEGORIES_SUCCESS,
        categories
    };
};

export function loadCategoriesFail(error) {
    return {
        type: LIST_CATEGORIES_FAIL,
        error
    };
};


export function getCategory(error) {
    return {
        type: GET_CATEGORY,
        error
    };
};