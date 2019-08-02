import React from 'react';
import './Novo.css';

import {auth} from '../../firebase/config.js';
import {criarRemedio} from '../../firebase/remedios.js';

// import Button from '@material-ui/core/Button'; import renderEmpty from
// 'antd/lib/config-provider/renderEmpty'; import {Button} from 'antd'; import
// 'antd/dist/antd.css' const {search} = Input;

class NewRemForm extends React.Component {
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
            criarRemedio(
                auth.currentUser.uid, 
                this.state.Name , 
                '', 
                this.state.Days + "("+this.state.Time+")", 
                () => {
                    alert("Remédio adicionado")
                    this.props.history.push('./Visualizar')
                })

            event.preventDefault();
    }

    render() {
        return (
            <div className="App-header">

                <h1 className = "Name">
                    Novo Remédio
                </h1>
                <div>
                <form onSubmit={this.handleSubmit} className="formulario">
                    <label >
                        <input
                            className="RemName"
                            placeholder="Nome do Medicamento"
                            type="text"
                            value={this.state.Name}
                            onChange={this.handleChangeName}/>
                    </label>
                    <label >
                        <input
                            className="RemDays"
                            placeholder="Dias da Semana (Segunda, Terça, ...)"
                            type="text"
                            value={this.state.RemDays}
                            onChange={this.handleChangeDays}/>
                    </label>
                    <label>
                        <input
                            className="RemTime"
                            placeholder="Horário (HH:MM)"
                            type="text"
                            value={this.state.Time}
                            onChange={this.handleChangeTime}/>
                    </label>

                    {/* <label >
                        <textarea
                            className="Description"
                            placeholder="Detalhes"
                            type="text"
                            value={this.state.Description}
                            onChange={this.handleChangeDescription}/>
                    </label> */}
                    <input className="submitbutton" type="submit" value="Adicionar Remédio"/>

                </form>
              </div>
            </div>
        );
    }
}

export default NewRemForm;
