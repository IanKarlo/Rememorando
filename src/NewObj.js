import React from 'react';
import './NewObj.css';

// import Button from '@material-ui/core/Button'; import renderEmpty from
// 'antd/lib/config-provider/renderEmpty'; import {Button} from 'antd'; import
// 'antd/dist/antd.css' const {search} = Input;

class NewObjForm extends React.Component {
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
        alert('Nome: ' + this.state.Name + "   Lugar: " + this.state.Pos + "   Descrição:    " + this.state.Description);
        event.preventDefault();
    }

    render() {
        return (
            <header className="App-header">

                <h1>
                    Novo Objeto
                </h1>

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
                    {/* <label >
                        <textarea
                            className="Description"
                            placeholder="Detalhes"
                            type="text"
                            value={this.state.Description}
                            onChange={this.handleChangeDescription}/>
                    </label> */}
                    <input className="submitbutton" type="submit" value="Adicionar Objeto"/>

                </form>

            </header>
        );
    }
}

export default NewObjForm;
