import React, {Component} from "react";


export class ListItem extends Component {

    deleteItem = () => {
        this.props.onDelete(this.props.item.id);
    }

    render() {
        return <tr>
            <td>{this.props.item.name}</td>
            <td>{this.props.item.surname}</td>
            <td>{this.props.item.email}</td>
            <td>
                <button onClick={this.deleteItem} className="deleteBtn">delete</button>
            </td>
        </tr>
    }
}


export default ListItem;
