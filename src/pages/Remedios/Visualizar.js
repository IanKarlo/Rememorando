import React, { Component } from 'react';
import { render } from 'react-dom';

import 'antd/es/date-picker/style/css';
import InputLabel from '../../components/InputLabel.js'
import Lista from '../../components/Lista.js'

import {onLogin} from '../../firebase/auth.js';
import {listarRemedios, removerRemedio} from '../../firebase/remedios.js';

class Visualizar extends Component {

  constructor(props){
    super(props)

    this.state = {
      remedio:  []
    }

    this.adicionarRemedio = this.adicionarRemedio.bind(this)
    this.deletarRemedio = this.deletarRemedio.bind(this)
    
    onLogin(this, () => {
      listarRemedios(() => {
        this.setState({obj: []})
      }, (data, id) => {
        this.adicionarRemedio({
          nome: data.nome,
          local: data.local,
          id: id
        })
      })
    })
  }

  deletarRemedio(id){
    removerRemedio(id, () => {
      var el = this.state.remedio.find((v) => {
        return v.id == id
      })

      this.state.remedio.splice(el, 1)

      this.setState(
        {remedio: (this.state.remedio)}
      )
    })
  }

  adicionarRemedio(remedio){
    this.setState({remedio: (this.state.remedio.concat([remedio]))})
  }

  render() {
    return (
      <div className = "Background">
          <Lista title="Meus Objetos" onDelete={this.deletarRemedio} itens = {this.state.remedio} tam = {this.state.remedio.length}/>  
      </div>
    );
  }
}

export default Visualizar;