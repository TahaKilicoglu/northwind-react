import EmployeesApi from '../../rest/employees.api';

/*
 * action types
 */
export const LIST_EMPLOYEES_REQUEST = 'employees/LIST_EMPLOYEES_REQUEST';
export const LIST_EMPLOYEES_SUCCESS = 'employees/LIST_EMPLOYEES_SUCCESS';
export const LIST_EMPLOYEES_FAIL = 'employees/LIST_EMPLOYEES_FAIL';

export const DELETE_EMPLOYEE_REQUEST = 'employees/DELETE_EMPLOYEE_REQUEST';
export const DELETE_EMPLOYEE_SUCCESS = 'employees/DELETE_EMPLOYEE_SUCCESS';
export const DELETE_EMPLOYEE_FAIL = 'employees/DELETE_EMPLOYEE_FAIL';

export const UPDATE_EMPLOYEE_REQUEST = 'employees/UPDATE_EMPLOYEE_REQUEST';
export const UPDATE_EMPLOYEE_SUCCESS = 'employees/UPDATE_EMPLOYEE_SUCCESS';
export const UPDATE_EMPLOYEE_FAIL = 'employees/UPDATE_EMPLOYEE_FAIL';

export const GET_EMPLOYEE = 'employees/GET_EMPLOYEE';

/*
 * other
 */

const employeesApi = new EmployeesApi();

/*
 * action creators
 */
export function loadEmployees() {
    return function apiListEmployees(dispatch) {
        return employeesApi.list()
            .then(res => {
                dispatch(loadEmployeesSuccess(res.data));
            })
            .catch(error => {
                dispatch(loadEmployeesFail(error));
            });
    };

};

export function loadEmployeesSuccess(employees) {
    return {
        type: LIST_EMPLOYEES_SUCCESS,
        employees
    };
};

export function loadEmployeesFail(error) {
    return {
        type: LIST_EMPLOYEES_FAIL,
        error
    };
};

export function getCategory(error) {
    return {
        type: GET_EMPLOYEE,
        error
    };
};