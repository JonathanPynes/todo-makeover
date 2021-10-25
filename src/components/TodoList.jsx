import React, { useState } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";

function TodoList() {
    const [todo, setTodo] = useState([]);
    const [todoName, setTodoName] = useState("");

    //function handleSubmit(e) ? which is better to use?
    const handleSubmit = (e) => {
        e.preventDefault();
        setTodo([
            ...todo,
            {
                id: nanoid(),
                name: todoName,
            },
        ]);
        setTodoName("");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        name="item" //what is this? why does the input need a name?
                        type="text"
                        value={todoName}
                        onChange={(e) => setTodoName(e.target.value)}
                    />
                </label>
            </form>
            <ul>
                {todo.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;
