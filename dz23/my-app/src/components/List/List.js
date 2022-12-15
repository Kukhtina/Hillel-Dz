import React, {Component} from "react";

import ListItem from "../ListItem/ListItem";

export class List extends Component {


    render() {
        return <>
            {this.props.list.map((listItem) => {
                return <ListItem onDelete={this.props.onDelete} key={listItem.id} item={listItem}/>
            })}
        </>
    }
}


export default List;
