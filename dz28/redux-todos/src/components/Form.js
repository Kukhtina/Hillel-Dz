import React from "react";
import {useDispatch} from "react-redux";

import './Form.css';
import {createTodo} from "../store/actions/todos";

function Form() {
    const dispatch = useDispatch();

    function onSubmit(e) {
        e.preventDefault();

        const newTodo = {
            id: Date.now(),
            title: e.target.elements.title.value,
            isDone: false,
        }

        dispatch(createTodo(newTodo));
        e.target.reset();
    }

    return (
        <div className="form-box">
            <form className="form" onSubmit={onSubmit}>
                <input className="enter-task" type="text" name="title"/>
                <button className="btn-add-task">Save</button>
            </form>
        </div>
    );
}


export default Form;

