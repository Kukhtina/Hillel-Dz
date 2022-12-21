import React from "react";

import ListItem from "../ListItem/ListItem";

import "./List.css";

function List(props) {
    return (
        <ul className="tasks">
            {props.tasks.map((item) => {
                return <ListItem key={item.id} task={item} onDelete={props.onDelete} onToggle={props.onToggle}/>
            })}
        </ul>
    );
}

export default List;
