import React from "react";
import {useDispatch} from "react-redux";

import {deleteTodo, toggleTodo} from "../store/actions/todos";

import './ListItem.css';

function ListItem({task: {id, title, isDone}}) {

    const dispatch = useDispatch();

    function onToggleClick() {
        dispatch(toggleTodo(id));
    }


    function onDeleteClick(e) {
        e.stopPropagation();
        dispatch(deleteTodo(id));
    }

    return (
        <li className={`list-item ${isDone ? "done" : ""}`}
            onClick={onToggleClick}>
            <div className="task-container">
                <span>{title}</span>
                <button className="btn-del-task" onClick={onDeleteClick}>Delete</button>
            </div>
        </li>
    );
}


export default ListItem;
