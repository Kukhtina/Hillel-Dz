import React from "react";
import {useSelector} from "react-redux";

import ListItem from './ListItem';
import {selectTodos} from "../store/selectors/todos";

import './List.css';

function List() {
   const list = useSelector(selectTodos);
    return (
        <ul className="tasks">
            {list.map((item) => {
                return <ListItem key={item.id} task={item}/>
            })}
        </ul>
    );
}

export default List;
