// 메인 APP 파일

'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import List from './../../components/products/list';

class ProductsMain extends React.Component {
  render() {
    return (
      <List></List>
    )
  }
}

let domContainer = document.getElementById('products-main-dom');
ReactDOM.render(<ProductsMain />, domContainer);