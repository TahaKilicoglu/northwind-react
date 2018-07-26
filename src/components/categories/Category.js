import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Category = function(params) {
  const cat = params.category;
  return (
    <div
      className="col-xs-12 col-sm-6 col-md-3"
      style={{ padding: "10px" }}
    >
      <div className="card">
        <img
          className="card-img-top"
          style={{ width: "172px" }}
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
  );
};

const mapStateToProperties = state => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProperties)(Category);
