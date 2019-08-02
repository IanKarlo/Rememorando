import React from 'react';
import { Input, Tooltip, Icon, Button} from 'antd';
import 'antd/es/date-picker/style/css';
import './FormatoItem.css'
import { Link } from 'react-router-dom'

class FormatoItem extends React.Component{

  render(){
     const { nome, icon, path} = this.props
    return(
      <Link to={path}>
        <div className = "Item" > 
              <div className = "DivObj">
                {nome}
              </div> 
            <Icon className="Delete" type={icon}/>
        </div>
      </Link>
    );
  }

}

export default FormatoItem;