import React from 'react';
import classNames from 'classnames';

export default class Navbar extends React.Component{

  render(){
    return(
      <nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
        <div className="container topnav">
          <div className="navbar-header">
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
              data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            </button>
            <a className="navbar-brand topnav" href="#">{this.props.brand}</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              {this.props.children}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}


export default class NavItem extends React.Component {
  render() {
    const _className = classNames("nav-item", { dropdown: this.props.dropdown }, this.props.className);
    return (
      <li {...this.props} className={_className}>
        { this.props.children }
      </li>
    );
  }
}

export default class DropdownToggle extends React.Component {
  render() {
    return (
      <a className="nav-link" data-toggle="dropdown" role="button" {... this.props}>
        {this.props.children}
      </a>);
  }
}

export default class DropdownMenu extends React.Component {
  render() {
    return <div className="dropdown-menu" {... this.props}>{this.props.children}</div>;
  }
}
