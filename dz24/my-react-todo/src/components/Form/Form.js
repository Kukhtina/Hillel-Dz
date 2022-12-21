import React, {useState} from "react";

import './Form.css';

function Form(props) {
    const [isError, setIsError] = useState(false);

    function onForm(e) {
        e.preventDefault();

        const title = e.target.elements.title.value.trim()

        if (title === "" || title === null) {
            setIsError(true);
        } else {
            props.onSave({
                title,
                isDone: false
            });

            e.target.reset();
        }
    }

    return (
        <div className="form-box">
            {isError && <div>Error: please enter your task</div>}
            <form className="form" onSubmit={onForm}>
                <input className="enter-task" type="text" name="title" onInput={() => setIsError(false)}/>
                <button className="btn-add-task" disabled={isError}>Save</button>
            </form>
        </div>
    );
}


export default Form;

