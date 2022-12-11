import React, {Component} from 'react';

import './Form.css';

export class Form extends Component {

    onFormSubmit = (e) => {
        e.preventDefault();

        const todoTitle = e.target.elements.title.value;
        this.props.addTask(todoTitle);
        e.target.reset();
    };



    render() {
        return (
            <form onSubmit={this.onFormSubmit} >
                    <input className="input" name="title" placeholder="Enter your task"/>
                    <button className="btnSave">Save</button>
            </form>
        );
    }
}

export default Form;
