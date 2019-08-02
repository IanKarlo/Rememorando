import React from 'react';
import './Novo.css';

import {auth} from '../../firebase/config.js';
import {criarObjeto} from '../../firebase/objetos.js';

// import Button from '@material-ui/core/Button'; import renderEmpty from
// 'antd/lib/config-provider/renderEmpty'; import {Button} from 'antd'; import
// 'antd/dist/antd.css' const {search} = Input;

class Novo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Pos: '',
            Description: ''
        };

        this.handleChangeName = this
            .handleChangeName
            .bind(this);
        this.handleChangePos = this
            .handleChangePos
            .bind(this);
        this.handleChangeDescription = this
            .handleChangeDescription
            .bind(this);

        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handleChangeName(event) {
        this.setState({Name: event.target.value});
    }
    handleChangePos(event) {
        this.setState({Pos: event.target.value});
    }
    handleChangeDescription(event) {
        this.setState({Description: event.target.value});
    }

    handleSubmit(event) {
        
        criarObjeto(
            auth.currentUser.uid, 
            this.state.Name, 
            '', 
            this.state.Pos,
            () => {
                alert("Objeto adicionado")
                this.props.history.push("./Visualizar")
            }
        )

        event.preventDefault();
    }

    render() {
        return (
            <div className="App-header">

                <h1 className="addheader">
                    Novo Objeto
                </h1>
              <div className = "Login-section">
                <form onSubmit={this.handleSubmit} className="formulario">
                    <label >
                        <input
                            className="ObjName"
                            placeholder="Nome do Objeto"
                            type="text"
                            value={this.state.Name}
                            onChange={this.handleChangeName}/>
                    </label>
                    <label >
                        <input
                            className="ObjPos"
                            placeholder="Onde ele fica?"
                            type="text"
                            value={this.state.Pos}
                            onChange={this.handleChangePos}/>
                    </label>
                    <input className="submitbutton" type="submit" value="Adicionar Objeto"/>

                </form>
              </div>
            </div>
        );
    }
}

export default Novo