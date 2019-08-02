import React from 'react';
import { Input, Tooltip, Icon, Button} from 'antd';
import 'antd/es/date-picker/style/css';

//////////////////////////////////
import FormatoItem from './FormatoItemMenu.js';
import './FormatoItem.css';
///////////////////////////////////////////////

class Lista extends React.Component{
    

    render(){

    let {itens,tam} = this.props;
    const retorno = [];

    for(let i =0; i< tam; i++){
      retorno.push(
        <FormatoItem 
        nome = {itens[i].nome}
        icon = {itens[i].icon}
        path = {itens[i].path}
        />
      )
    }

      return(
        <div className = "Tabela">

        <div className = "Tittle">
          Routine
        </div>
        <div className = "Itens">
        {retorno}
        </div>
        </div>
      );

    }
}

export default Lista;