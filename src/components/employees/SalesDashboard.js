import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import OrdersService from "../../services/orders.service";
import Sales from "./Sales";
import EmployeesService from "../../services/employees.service";

class EmployeesDashboard extends Component {

  render() {
    const employees = _.orderBy(this.props.employees, ["lastName", "firstName"]);
    const ordersService = new OrdersService(this.props.orders);

    return (
      <div>
        <h3>Sales</h3>
        <div className="row align-items-center">
          {employees.map(emp => (
            <div
              key={emp.id}
              className="col-xs-12 col-sm-6 col-md-3"
              style={{ padding: "10px" }}
            >
              <div className="card">
                <img
                  className="card-img-top"
                  style={{ width: "96px" }}
                  src={`/api/employees/${emp.id}/image`}
                  alt={`${emp.firstName} ${emp.lastName}`}
                />
                <div className="card-body">
                  <h4 className="card-title">{`${emp.firstName} ${emp.lastName}`}</h4>
                  <div className="card-text">
                    <h5>{emp.title}</h5>
                    <Sales orders={ordersService.byEmployee(emp.id)}></Sales>
                  </div>
                  <Link
                    className="btn btn-primary"
                    to={`/employees/${emp.id}/orders`}
                  >
                    Orders
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProperties = state => {
  return {
    employees: state.employees,
    orders: state.orders
  };
};

export default connect(mapStateToProperties)(EmployeesDashboard);
