import React from 'react';
import './toolbar-item.css'
import s from './images/bi.png'
import { toggleToolbarEl } from '../../components/actions/actions';
import { connect } from 'react-redux';

class Toolbar__item extends React.Component {

  render(){
    const { toolName, toolbarItemClicked} = this.props;
    return(
      <div className = "toolbar-item" onClick = {() => this.props.changeActive(this.props.id)}>
        <img src={s} alt={this.props.alt}/>
        <p>{toolName}</p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispath) => ({
  changeActive(id){
    dispath(toggleToolbarEl(id))
  }
})

export default connect(null, mapDispatchToProps)(Toolbar__item);