import React from 'react';
import './NewRoutine.css';

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
        if (parseInt(event.target.value[event.target.value.length - 1]) || event.target.value[event.target.value.length - 1] === ':' || event.target.value.length == 0) {
            if (event.target.value.length == 2) {
                if (this.state.Time.length == 1) {
                    this.setState({
                        Time: event.target.value + ':'
                    });
                } else {
                    this.setState({Time: event.target.value});
                }
            } else if (event.target.value.length <= 5) {
                this.setState({Time: event.target.value});
            }
        }

    }
    handleChangeDescription(event) {
        this.setState({Description: event.target.value});
    }
    handleChangeDays(event) {
        this.setState({Days: event.target.value});
    }

    handleSubmit(event) {
        if (((this.state.Time[0] + this.state.Time[1]) > 24) || ((this.state.Time[3] + this.state.Time[4]) > 59) || !(this.state.Time[0])) {
            if ((this.state.Time[0] + this.state.Time[1]) == 24) {
                this.state.Time[0] = '0';
                this.state.Time[1] = '0';
            }
            alert('Horário Inválido');
            event.preventDefault();
        } else {
            alert('Nome: ' + this.state.Name + ' Horário: ' + this.state.Time + ' Dias da Semana: ' + this.state.Days)
            event.preventDefault();
        }
    }

    render() {
        return (
            <header className="App-header">

                <h1>
                    Nova Atividade
                </h1>

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
                    <div className="timelabel">
                        <label>
                            <input
                                className="ActvTime"
                                placeholder="Horário (HH:MM)"
                                type="text"
                                value={this.state.Time}
                                onChange={this.handleChangeTime}/>
                        </label>
                    </div>

                    <label >
                        <textarea
                            className="Description"
                            placeholder="Detalhes"
                            type="text"
                            value={this.state.Description}
                            onChange={this.handleChangeDescription}/>
                    </label>
                    <input className="submitbutton" type="submit" value="Adicionar Atividade"/>

                </form>

            </header>
        );
    }
}

export default SigninForm;
