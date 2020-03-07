import React from 'react';
import './toolbar-item.css'
import { toggleToolbarEl } from '../../components/actions/actions';
import { connect } from 'react-redux';

const ToolbarItem = props => {
    const { toolName, changeActive, alt, src } = props;
    return(
      <div className = "toolbar-item" onClick = {() => changeActive(props.id)}>
        <img src={src} alt={alt}/>
        <p>{toolName}</p>
      </div>
    );
}

const mapDispatchToProps = (dispath) => ({
  changeActive(id){
    dispath(toggleToolbarEl(id))
  }
})

export default connect(null, mapDispatchToProps)(ToolbarItem);