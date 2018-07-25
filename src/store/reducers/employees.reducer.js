import {
    LIST_EMPLOYEES_SUCCESS,
    GET_EMPLOYEE,
    DELETE_EMPLOYEE_SUCCESS
} from '../actions/employee.actions';

const employeesReducer = function employeesReducer(currentState = [], action) {
    let state = currentState;
    if (action.type.startsWith('employees/')) {
        switch (action.type) {
            case LIST_EMPLOYEES_SUCCESS:
                state = action.employees;
                break;
            case GET_EMPLOYEE:
                break;
            case DELETE_EMPLOYEE_SUCCESS:
                state = state.filter(model => model.id !== action.id);
                break;
            default:
                break;
        }
    }
    return state;
}

export default employeesReducer;