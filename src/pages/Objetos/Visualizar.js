import React, { Component } from 'react';
import { render } from 'react-dom';

import 'antd/es/date-picker/style/css';
import InputLabel from '../components/InputLabel.js'
import Lista from './components/Lista.js'

class Visualizar extends Component {

  render() {

    let obj = [{
      nome: 'item1',
      local: 'local1'
    },
    {
      nome: 'item2',
      local: 'local2'
    },
    {
      nome: 'item2',
      local: 'local2'
    },
    {
      nome: 'item2',
      local: 'local2'
    },
    {
      nome: 'item2',
      local: 'local2'
    },
    {
      nome: 'item2',
      local: 'local2'
    }];

    return (
      <div className = "Background">
          <Lista itens = {obj} tam = {obj.length}/>  
      </div>
    );
  }
}

export default Visualizar;