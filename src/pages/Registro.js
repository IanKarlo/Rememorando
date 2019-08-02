import React from 'react';
import './Registro.css';

import {criarUsuario} from '../firebase/auth';

class Registro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Login: '',
            Senha: '',
            ConfirmSenha: ''
        };

        this.handleChangeLogin = this
            .handleChangeLogin
            .bind(this);
        this.handleChangeSenha = this
            .handleChangeSenha
            .bind(this);
        this.handleChangeConfirmSenha = this
            .handleChangeConfirmSenha
            .bind(this);

        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handleChangeLogin(event) {
        this.setState({Login: event.target.value});
    }
    handleChangeSenha(event) {
        this.setState({Senha: event.target.value});
    }
    handleChangeConfirmSenha(event) {
        this.setState({ConfirmSenha: event.target.value});
    }

    handleSubmit(event) {
        if (this.state.Senha == this.state.ConfirmSenha) {
            criarUsuario(
                this.state.Login,
                this.state.Senha,
                () => {
                    this.props.history.push("/menu");
                }
            )
            event.preventDefault();
        } else {
            alert('As senhas não correspondem: ' + this.state.Login + "   " + this.state.Senha + " != " + this.state.ConfirmSenha);
            event.preventDefault();
        }

    }

    render() {
        return (
            <header className="App-header">
                <div className="Login-section">
                    <h1 className='h1d'>
                        Routine App
                    </h1>

                    <form onSubmit={this.handleSubmit} className="formulario">
                        <label >
                            <input
                                className="Login"
                                placeholder="Login"
                                type="text"
                                value={this.state.Login}
                                onChange={this.handleChangeLogin}/>
                        </label>
                        <label >
                            <input
                                className="Senha"
                                placeholder="Senha"
                                type="password"
                                value={this.state.Senha}
                                onChange={this.handleChangeSenha}/>
                        </label>
                        <label >
                            <input
                                className="ConfirmSenha"
                                placeholder="Confirme sua Senha"
                                type="password"
                                value={this.state.ConfirmSenha}
                                onChange={this.handleChangeConfirmSenha}/>
                        </label>
                        <input className="submitbutton" type="submit" value="Cadastrar"/>

                    </form>

                </div>

            </header>
        );
    }
}

export default Registro;
