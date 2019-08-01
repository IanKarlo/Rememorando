import React from 'react';
import './Entrar.css';
// import { Input, Tooltip, Icon } from 'antd'; import 'antd/dist/antd.css'
// const {search} = Input;

class Entrar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Login: '',
            Senha: ''
        };

        this.handleChangeLogin = this
            .handleChangeLogin
            .bind(this);
        this.handleChangeSenha = this
            .handleChangeSenha
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

    handleSubmit(event) {
        alert('Login: ' + this.state.Login + " Senha: " + this.state.Senha);
        event.preventDefault();
    }

    render() {
        return (
            <header className="App-header">
                <div className="Login-section">
                    <h1>
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
                                type="text"
                                value={this.state.Senha}
                                onChange={this.handleChangeSenha}/>
                        </label>
                        <input className="submitbutton" type="submit" value="Login"/>
                        <button className="signinbutton">Cadastre-se</button>
                    </form>
                </div>

            </header>
        );
    }
}

export default Entrar;
