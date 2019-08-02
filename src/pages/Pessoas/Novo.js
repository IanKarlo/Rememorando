import React from 'react';
import './Novo.css';

import {auth, storage} from '../../firebase/config.js';
import {criarPessoa} from '../../firebase/pessoas.js';

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
            Description: '',
            File: ''
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
        
        this.changeUpload = this.changeUpload.bind(this);
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
        
        criarPessoa(
            auth.currentUser.uid, 
            this.state.Name, 
            '',//this.state.File,
            this.state.Description,
            () => {
                alert("Conhecido adicionado")
                this.props.history.push("./Visualizar")
            }
        )

        event.preventDefault();
    }

    changeUpload(e){
        var timestamp = Number(new Date());
        var storageRef = storage.ref(timestamp.toString());
        var file_data = document.getElementById('file').files[0]
        storageRef.put(file_data)
        .then(() => {
            console.log(storageRef.toString())
            //this.setState({File: storageRef})
        })
    }

    render() {
        return (
            <div className="App-header">
                <h1 className="addheader">
                    Nova Pessoa
                </h1>
              <div className = "Div1">
                <form onSubmit={this.handleSubmit} className="formulario">

                    <label >
                        <input
                            className="ActvName"
                            placeholder="Nome"
                            type="text"
                            value={this.state.Name}
                            onChange={this.handleChangeName}/>
                    </label>

                    <label >
                        <input
                            className="Description"
                            placeholder="Descrição"
                            type="text"
                            value={this.state.Description}
                            onChange={this.handleChangeDescription}/>
                    </label>
                    <input className="submitbutton" type="submit" value="Adicionar Pessoa"/>

                </form>
              </div>
            </div>
        );
    }
}

export default SigninForm;