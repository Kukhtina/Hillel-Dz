import React, {useEffect, useState} from "react";

import {getTasks, onToggle, onSaveTask, onDeleteTask} from "../Services/Service";
import Form from "../Form/Form";
import List from "../List/List";
import './App.css';

function App() {
    const [tasksList, setTasksList] = useState([]);

    useEffect(() => {
        getTasks().then(setTasksList);
    }, [])

    function onDelete(id) {
        onDeleteTask(id).then(() => {
            setTasksList(tasksList.filter((item) => item.id !== id));
        });
    }

    function onSave(task) {
        onSaveTask(task).then((data) => {
            setTasksList([...tasksList, data]);
        })
    }

    function onToggleTask(updatedTask) {
        onToggle(updatedTask).then((newItem) => {
            const updatedList = tasksList.map((item) => {
                if (item.id === newItem.id) {
                    return newItem;
                }

                return item;
            });

            setTasksList(updatedList);
        })
    }

    return (
        <div className="container">
            <h1 className="todo-title">To Do List</h1>
            <List tasks={tasksList} onDelete={onDelete} onToggle={onToggleTask}/>
            <Form onSave={onSave}/>
        </div>);
}

export default App;

