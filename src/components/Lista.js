import React from 'react';
import { Input, Tooltip, Icon, Button} from 'antd';
import {Link} from 'react-router-dom';
import 'antd/es/date-picker/style/css';
import FormatoItem from './FormatoItem.js';
import './FormatoItem.css';

class Lista extends React.Component{
    

    render(){

    let {itens,tam} = this.props;
    const retorno = [];

    for(let i =0; i< tam; i++){
      retorno.push(
        <FormatoItem onDelete={this.props.onDelete} data = {itens[i]} />
      )
    }

      return(
        <div className = "Tabela">

        <div className = "Tittle">
          {this.props.title}
        </div>

        <div className = "blocoPosi">
          <Link to="./Novo" className = "AddButton">
              ADICIONAR
          </Link>
        </div>
        
        <div className = "Itens">
        {retorno}
        </div>
        </div>
      );

    }
}

export default Lista;