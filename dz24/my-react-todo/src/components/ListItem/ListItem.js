import React from "react";

import './ListItem.css';

function ListItem(props) {


    function onElementClick() {
        const updatedTask = {...props.task, isDone: !props.task.isDone};

        props.onToggle(updatedTask);
    }

    function onDeleteClick(e) {
        e.stopPropagation();
        props.onDelete(props.task.id);
    }

    return (
        <li className={"list-item" + (props.task.isDone ? " done" : "")}
            onClick={onElementClick}>
            <div className="task-container">
                <span>{props.task.title}</span>
                <button className="btn-del-task" onClick={onDeleteClick}>Delete</button>
            </div>
        </li>
    );
}


export default ListItem;
