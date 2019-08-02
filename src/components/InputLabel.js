import React from 'react';
import { Input, Tooltip, Icon, Button} from 'antd';
import 'antd/es/date-picker/style/css';
import './TextStyle.css';

const {Search} = Input;


class InputLabel extends React.Component{

  render(){

    return(
      <div>
        <div className = "TittlePage">
            <p>
          ADICIONAR OBJETOS
          </p>
        </div>

        <div className = "InputLabel">
          <div className = "Login">
          <Input style = {{width:200}}
            placeholder = "Item"
            
            />
          </div>

          <div className = "Password">
            <Input style = {{width:200}}
            placeholder = "Localização"
            />
          </div>

          <div className = "Button">
            <Button style={{width:90}} type="primary">Adicionar</Button>
          </div>
        </div>
      </div>
    );

  }

}

export default InputLabel;