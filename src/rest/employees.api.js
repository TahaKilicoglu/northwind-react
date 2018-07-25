import ApiBase from './apiBase';

class EmployeesApi extends ApiBase {

    constructor() {
        super("/api/employees");
    }
}

export default EmployeesApi;