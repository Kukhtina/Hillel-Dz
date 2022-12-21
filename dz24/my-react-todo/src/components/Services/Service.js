import React from "react";


const TASK_URL = "https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos/";

export function getTasks() {
    return fetch(TASK_URL).then((res) => res.json());
}

export function onDeleteTask(id) {
    return fetch(TASK_URL + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => res.json());
}

export function onSaveTask(task) {
    return fetch(TASK_URL, {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => res.json());

}

export function onToggle(updatedTask) {
    return fetch(TASK_URL + updatedTask.id, {
        method: "PUT",
        body: JSON.stringify(updatedTask),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => res.json());
}

