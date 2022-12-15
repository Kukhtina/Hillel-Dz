import React, {Component} from 'react';

import './Form.css';

export class Form extends Component {
    state = {
        name: "",
        surname: "",
        email: "",
    }

    onInputChange = (e) => {
        this.setState({
            ...this.state, [e.target.name]: e.target.value,
        });
    }

    onBtnAddClick = () => {
        this.props.onAddItem(this.state);
        this.setState(Object.keys(this.state).reduce((acc, key) => ({...acc, [key]: ""}), {}))
    }


    render() {
        return (
            <tr>
                <td><input className="input" form="addForm" name="name" placeholder="name"
                           value={this.state.name} onChange={this.onInputChange}/></td>
                <td><input className="input" form="addForm" name="surname" placeholder="surname"
                           value={this.state.surname} onChange={this.onInputChange}/>
                </td>
                <td><input className="input" form="addForm" name="email" placeholder="email"
                           value={this.state.email} onChange={this.onInputChange}/></td>
                <td>
                    <button onClick={this.onBtnAddClick} className="btnAdd" form="addForm">Add</button>
                </td>
            </tr>
        );
    }

}


export default Form;
