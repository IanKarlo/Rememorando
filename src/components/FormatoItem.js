import React from 'react';
import { Input, Tooltip, Icon, Button} from 'antd';
import 'antd/es/date-picker/style/css';
import './FormatoItem.css'


class FormatoItem extends React.Component{

  constructor(props){
    super(props)
    this.deleteItem = this.deleteItem.bind(this)
  }

  deleteItem(){
    var a = window.confirm('Deseja Realmente excluir este item?')
    if(a==true) this.props.onDelete(this.props.data.id)
  }

  render(){
    
    return(
      <div className = "Item" > 
            <div className = "DivObj">
              {this.props.data.nome}
            </div> 

            <div className = "DivObj2">
              {this.props.data.local}
            </div>
          <Icon className="Delete" type="delete" onClick = {this.deleteItem}/>
      </div>
    );
  }

}

export default FormatoItem;