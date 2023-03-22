import React, { Component } from 'react';
import '../_assets/css/header.css';
export default class Header extends Component {
  render() {
    return (
      <div className="menu">
        <div className="menuchoice">
          <ul>
            <ol>Home</ol>
            <ol>Shopping Cart</ol>
          </ul>
        </div>
      </div>
    );
  }
}
