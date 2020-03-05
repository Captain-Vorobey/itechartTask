import React from 'react';
import s from '../pictures/bi.png';
import './toolbarItem'

const ToolbarItem = props => {
    return (
        <div className="ToolbarItem">
            <img src={s} alt={props.alt}/>
        </div>
    );
}

export default ToolbarItem;