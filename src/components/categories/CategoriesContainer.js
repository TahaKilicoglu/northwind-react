import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";

import Category from './Category';

class Categories extends Component {
  render() {
    const categories = _.orderBy(this.props.categories, ["name"], ["desc"]);
    return (
      <div>
        <h3>Product Categories</h3>
        <div className="row align-items-center">
          {categories.map(cat => (
            <Category key={cat.id} category={cat} />
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
