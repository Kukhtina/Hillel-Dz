import React, { Component } from 'react';

import './ListItem.css';

export class ListItem extends Component {
    onElementClick = () => {
        this.props.onToggle(this.props.todo.id);
    };

    onDeleteClick = (e) => {
        e.stopPropagation();

        this.props.onDelete(this.props.todo.id);
    };

    render() {
        return (
            <li
                className={'item' + (this.props.todo.isDone ? ' done' : '')}
                onClick={this.onElementClick}
            >
                {this.props.todo.title}
                <button className="btnDelete" onClick={this.onDeleteClick}>Delete</button>
            </li>
        );
    }
}

export default ListItem;
