import React from 'react';
import { Input, Tooltip, Icon, Button} from 'antd';
import 'antd/es/date-picker/style/css';
import FormatoItem from './FormatoItem.js';
import './FormatoItem.css';


class Lista extends React.Component{
    

    render(){

    let {itens,tam} = this.props;
    const retorno = [];

    for(let i =0; i< tam; i++){
      retorno.push(
        <FormatoItem nome = {itens[i].nome}
        localizacao = {itens[i].local}  />
      )
    }

      return(
        <div className = "Tabela">
        <div className = "Tittle">
          Menu de Objetos
        </div>
        {retorno}

        </div>
      );

    }
}

export default Lista;