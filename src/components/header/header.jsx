import React, { Component } from 'react';
import { Title, Div, Divul, ShoppingCart } from '../../_assets/header-styled';

export default class Header extends Component {
  render() {
    return (
      <Div>
        <Title>My Hero</Title>
        <Divul>
          <ShoppingCart>
            <ul>
              <ol>Shopping Cart</ol>
            </ul>
          </ShoppingCart>
        </Divul>
      </Div>
    );
  }
}
