import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavItem, Navbar, NavbarToggler, Collapse } from "reactstrap";

/*
 * This is a strange mixture of reactstrap and raw Bootstrap.  Still working it out.
 */

// The Header creates links that can be used to navigate
// between routes.
class Header extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <header>
        <Navbar dark className="bg-info navbar-expand-md">
          <Link className="navbar-brand" to="/">
            Northwind
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <ul className="navbar-nav mr-auto">
              <NavItem>
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/orders">
                  Orders
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/categories">
                  Categories
                </Link>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>

      </header>
    );
  }
}

export default Header;
