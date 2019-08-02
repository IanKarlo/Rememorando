import React, { Component } from 'react';
import { render } from 'react-dom';

import 'antd/es/date-picker/style/css';
import InputLabel from '../../components/InputLabel.js'
import Lista from '../../components/Lista.js'

import {onLogin} from '../../firebase/auth.js';
import {listarObjetos, removerObjeto} from '../../firebase/objetos.js';

class Visualizar extends Component {

  constructor(props){
    super(props)

    this.state = {
      obj:  []
    }

    this.adicionarObjeto = this.adicionarObjeto.bind(this)
    this.deletarObjeto = this.deletarObjeto.bind(this)
    
    onLogin(this, () => {
      listarObjetos(() => {
        this.setState({obj: []})
      }, (data, id) => {
        this.adicionarObjeto({
          nome: data.nome,
          local: data.local,
          id: id
        })
      })
    })
  }

  deletarObjeto(id){
    removerObjeto(id, () => {
      var el = this.state.obj.findIndex((v) => {
        return v.id == id
      })

      this.state.obj.splice(el, 1)

      this.setState(
        {obj: (this.state.obj)}
      )
    })
  }

  adicionarObjeto(obj){
    this.setState({obj: (this.state.obj.concat([obj]))})
  }

  render() {
    return (
      <div className = "Background">
          <Lista title="Meus Objetos" onDelete={this.deletarObjeto} itens = {this.state.obj} tam = {this.state.obj.length}/>  
      </div>
    );
  }
}

export default Visualizar;