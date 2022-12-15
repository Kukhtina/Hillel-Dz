import React, {Component} from "react";

import '../List/List';
import '../Form/Form';

import './App.css';
import List from "../List/List";
import Form from "../Form/Form";

class App extends Component {
    state = {
        list: []
    }

    componentDidMount() {
        fetch("https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users").then((res) => {
            return res.json()
        }).then((res) => {
            this.setState({
                list: res
            })
        })
    }

    onDeleteContact = (id) => {
        fetch("https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/" + id, {
            method: "DELETE"
        }).then((res) => res.json()).then((data) => {
            this.setState({list: [...this.state.list].filter((item) => item.id !== id)})
        })
    }


    onAddItem = (item) => {
        fetch("https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => res.json()).then((res) => this.setState({list: [...this.state.list, res]}));
    }


    render() {
        return (
            <>
                <h1 className="appTitle">Contacts List</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <List list={this.state.list} onDelete={this.onDeleteContact}/>
                    </tbody>
                    <tfoot>
                    <Form onAddItem={this.onAddItem}/>
                    </tfoot>
                </table>
                <form id="addForm" onSubmit={(e) => e.preventDefault()}/>
            </>
        );
    }
}


export default App;
