import React from 'react';
import './Novo.css';

import {auth} from '../../firebase/config.js';
import {criarRotina} from '../../firebase/rotinas.js';

// import Button from '@material-ui/core/Button'; import renderEmpty from
// 'antd/lib/config-provider/renderEmpty'; import {Button} from 'antd'; import
// 'antd/dist/antd.css' const {search} = Input;

class SigninForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Time: '',
            Days: '',
            Description: ''
        };

        this.handleChangeName = this
            .handleChangeName
            .bind(this);
        this.handleChangeTime = this
            .handleChangeTime
            .bind(this);
        this.handleChangeDescription = this
            .handleChangeDescription
            .bind(this);
        this.handleChangeDays = this
            .handleChangeDays
            .bind(this);

        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handleChangeName(event) {
        this.setState({Name: event.target.value});
    }
    handleChangeTime(event) {
        this.setState({Time: event.target.value});

    }
    handleChangeDescription(event) {
        this.setState({Description: event.target.value});
    }
    handleChangeDays(event) {
        this.setState({Days: event.target.value});
    }

    handleSubmit(event) {
        
        criarRotina(
            auth.currentUser.uid, 
            this.state.Name , 
            '', 
            this.state.Days + "("+this.state.Time+")", 
            () => {
                alert("Rotina adicionada")
                this.props.history.push('./Visualizar')
            })

        event.preventDefault();
    }

    render() {
        return (
            <div className="App-header">

                <h1 className = "Add">
                    Nova Atividade
                </h1>
                <div>
                <form onSubmit={this.handleSubmit} className="formulario">
                    <label >
                        <input
                            className="ActvName"
                            placeholder="Nome da Atividade"
                            type="text"
                            value={this.state.Name}
                            onChange={this.handleChangeName}/>
                    </label>
                    <label >
                        <input
                            className="ActvDays"
                            placeholder="Dias da Semana (Segunda, Terça, ...)"
                            type="text"
                            value={this.state.RemDays}
                            onChange={this.handleChangeDays}/>
                    </label>
                    <label>
                        <input
                            className="ActvTime"
                            placeholder="Horário (HH:MM)"
                            type="text"
                            value={this.state.Time}
                            onChange={this.handleChangeTime}/>
                    </label>
                    <input className="submitbutton" type="submit" value="Adicionar Atividade"/>

                </form>
              </div>
            </div>
        );
    }
}

export default SigninForm;
