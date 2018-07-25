import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Categories extends Component {
  render() {
    const categories = _.orderBy(this.props.categories, ["name"], ["desc"]);
    return (
      <div>
        <h3>Product Categories</h3>
        <div className="row align-items-center">
          {categories.map(cat => (
            <div
              key={cat.id}
              className="col-xs-12 col-sm-6 col-md-3"
              style={{ padding: "10px" }}
            >
              <div className="card">
                <img
                  className="card-img-top"
                  width="172px"
                  src={`/api/categories/${cat.id}/image`}
                  alt={cat.categoryName}
                />
                <div className="card-body">
                  <h4 className="card-title">{cat.categoryName}</h4>
                  <p className="card-text category-card-description">
                    {cat.description}
                  </p>
                  <Link
                    className="btn btn-primary"
                    to={`/categories/${cat.id}/products`}
                  >
                    Products
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
    categories: state.categories
  };
};

export default connect(mapStateToProperties)(Categories);
