import React, { Component } from 'react';
import { render } from 'react-dom';

import 'antd/es/date-picker/style/css';

import Lista from '../components/ListaMenu.js'

export class Menu extends Component {

    render() {
        const obj = [{
          nome: 'Seus Objetos',
          icon: 'key',
          path: '/objetos/visualizar'
        },
        {
          nome: 'Pessoas',
          icon: 'user',
          path: '/'
        },
        {
          nome: 'Remédios',
          icon: 'medicine-box',
          path: '/remedios/visualizar'
        },
        {
          nome: 'Rotina',
          icon: 'clock-circle',
          path: '/rotina/visualizar'
        },
        {
          nome: 'menu',
          icon: 'icon2',
          path: '/menu'
        },
        {
          nome: 'menu',
          icon: 'icon2',
          path: '/menu'
        }];
        
    
        return (
          <div className="Background">
              <Lista 
                itens = {obj} 
                tam = {obj.length}
              />
          </div>
        );
      }
}

export default Menu
