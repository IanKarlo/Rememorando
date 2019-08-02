import React, { Component } from 'react';
import { render } from 'react-dom';

import 'antd/es/date-picker/style/css';
import InputLabel from '../../components/InputLabel.js'
import Lista from '../../components/Lista.js'

import {onLogin} from '../../firebase/auth.js';
import {listarRotinas, removerRotina} from '../../firebase/rotinas.js';

class Visualizar extends Component {

  constructor(props){
    super(props)

    this.state = {
      rotina:  []
    }

    this.adicionarRotina = this.adicionarRotina.bind(this)
    this.deletarRotina = this.deletarRotina.bind(this)
    
    onLogin(this, () => {
      listarRotinas(() => {
        this.setState({obj: []})
      }, (data, id) => {
        this.adicionarRotina({
          nome: data.nome,
          local: data.local,
          id: id
        })
      })
    })
  }

  deletarRotina(id){
    removerRotina(id, () => {
      var el = this.state.rotina.find((v) => {
        return v.id == id
      })

      this.state.remedio.splice(el, 1)

      this.setState(
        {rotina: (this.state.rotina)}
      )
    })
  }

  adicionarRotina(rotina){
    this.setState({rotina: (this.state.rotina.concat([rotina]))})
  }

  render() {
    return (
      <div className = "Background">
          <Lista title="Meus Objetos" onDelete={this.deletarRotina} itens = {this.state.rotina} tam = {this.state.rotina.length}/>  
      </div>
    );
  }
}

export default Visualizar;