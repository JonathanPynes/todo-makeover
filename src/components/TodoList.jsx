import React, { useReducer, useRef } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";

function TodoList() {
    const inputRef = useRef();
    const [items, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "add":
                return [
                    ...state,
                    {
                        id: nanoid(),
                        name: action.name,
                        category: action.category,
                    },
                ];
            default:
                return state;
        }
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({
            type: "add",
            name: inputRef.current.value,
            category: inputRef.current.value,
        });
        inputRef.current.value = "";
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} />
            </form>
            <ul>
                {items.map((item, index) => (
                    <li key={item.id}>
                        {item.name}
                        {item.category}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;
