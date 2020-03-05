import React, { Component } from 'react';
import ToolbarItem from './toolbarItem';
import './index'

export default class Toolbar extends React.Component {
    state = {
        toolbarItems: []
    }

    componentDidMount() {
        this.setState(state => ({
            toolbarItems: this.props.store
        }))
    }

    render() {
        const items = this.state.toolbarItems.map(el => <ToolbarItem src={el.src}
                                                                    toolName={el.toolName}
                                                                     alt={el.alt} />)
        return (
            <nav className="Toolbar">
                {items}
            </nav>
        );
    }
}