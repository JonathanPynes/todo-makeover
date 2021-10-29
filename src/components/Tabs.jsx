import styled from "styled-components";
import COLORS from "../Colors";
import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import SpreadIconGray from "../icons/SpreadIconGray.jsx";
import NotesMeme from "../img/Meme.jpg";
import LinksMeme from "../img/Links.jpg";
import RickMeme from "../img/Rick-and-Morty-Memes.jpg";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    withRouter,
    useLocation,
} from "react-router-dom";

const TodosTab = () => {
    const [apiTodo, setApiTodo] = useState([]);
    const [showInput, setShowInput] = useState(false);
    const [todoName, setTodoName] = useState("");
    const [todosDesign, setTodoDesign] = useState([
        {
            title: "Project page",
            completed: false,
        },
        { title: "Today page", completed: false, id: nanoid() },
        { title: "Notifications & Confirmations", completed: false },
        { title: "Modals", completed: false },
    ]);
    // The list above is in the "design list" Should I just make another object to represent Product Planning in the original todos ^?
    const [todosProductPlanning, setTodoProductPlanning] = useState([
        {
            title: "Decide how to organize Today page",
            completed: false,
            id: nanoid(),
        },
        {
            title: "Create wireframes for the Today page",
            completed: false,
            id: nanoid(),
        },
        {
            title: "Decide whether to group items by type",
            completed: false,
            id: nanoid(),
        },
    ]);
    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoDesign([
            ...todosDesign,
            {
                id: nanoid(),
                title: todoName,
                completed: false,
            },
        ]);
        setTodoName("");
        setShowInput((current) => !current);
    };
    const handleCompleteTodo = (todo, id) => {
        const copy = [...todosDesign];
        copy[id].completed = !todo.completed;
        setTodoDesign(copy);
    };
    const handleCompletedTodoProduct = (todo, id) => {
        const copy = [...todosProductPlanning];
        copy[id].completed = !todo.completed;
        setTodoProductPlanning(copy);
    };
    const handleAddButtonClick = () => {
        setShowInput((current) => !current);
        console.log(showInput);
    };

    useEffect(async () => {
        const response = await fetch(
            "https://my-json-server.typicode.com/typicode/demo/posts"
        );
        const data = await response.json();
        const [item] = [data];
        setApiTodo(item);
        console.log(item);
    }, []);

    let history = useHistory();
    let location = useLocation();

    return (
        <>
            <TopRight2ndContainer>
                <TopRight2ndTabsContainer>
                    <TopRight2ndTabsTodos
                        onClick={() => history.push("/home/todosTab")}
                    >
                        <TopRight2ndTabsButton>10</TopRight2ndTabsButton>
                        Todos
                    </TopRight2ndTabsTodos>
                    <TopRight2ndTabsNotes
                        onClick={() => history.push("/home/notes")}
                    >
                        <TopRight2ndTabsButton>5</TopRight2ndTabsButton>
                        Notes
                    </TopRight2ndTabsNotes>
                    <TopRight2ndTabs
                        onClick={() => history.push("/home/links")}
                    >
                        <TopRight2ndTabsButton></TopRight2ndTabsButton>
                        Links
                    </TopRight2ndTabs>
                    <TopRight2ndTabs
                        onClick={() => history.push("/home/files")}
                    >
                        <TopRight2ndTabsButton></TopRight2ndTabsButton>
                        Files
                    </TopRight2ndTabs>
                </TopRight2ndTabsContainer>
            </TopRight2ndContainer>
            <Route path="/home/todosTab">
                <TopRight3rdContainer>
                    <TopRight3rdUl>
                        <TopRight3rdLi>
                            <input type="checkbox"></input>
                            <Right4thAnd5thLiLabel>
                                Project page
                            </Right4thAnd5thLiLabel>
                        </TopRight3rdLi>
                        <TopRight3rdLi>
                            <input type="checkbox"></input>
                            <Right4thAnd5thLiLabel>
                                Today page
                            </Right4thAnd5thLiLabel>
                        </TopRight3rdLi>
                    </TopRight3rdUl>
                </TopRight3rdContainer>
                <Right4thAnd5thContainer>
                    <Right4thAnd5thTitleAndSpreadContainer>
                        <Right4thAnd5thTitleContainer>
                            <Right4thAnd5thTitle>
                                Product Planning
                            </Right4thAnd5thTitle>
                        </Right4thAnd5thTitleContainer>
                        <Right4thAnd5thSpread>
                            <SpreadIconGray />
                        </Right4thAnd5thSpread>
                    </Right4thAnd5thTitleAndSpreadContainer>
                </Right4thAnd5thContainer>
                <Right4thAnd5thUlContainer>
                    <Right4thAnd5thUl>
                        {todosProductPlanning.map((todo, id) => {
                            return (
                                <Right4thAnd5thLi>
                                    <input
                                        type="checkbox"
                                        onChange={() =>
                                            handleCompletedTodoProduct(todo, id)
                                        }
                                    ></input>
                                    <Right4thAnd5thLiLabel
                                        style={{
                                            color: todo.completed
                                                ? "gray"
                                                : "black",
                                        }}
                                    >
                                        {todo.title}
                                    </Right4thAnd5thLiLabel>
                                </Right4thAnd5thLi>
                            );
                        })}
                    </Right4thAnd5thUl>
                </Right4thAnd5thUlContainer>
                <Right4thAnd5thContainer>
                    <Right4thAnd5thTitleAndSpreadContainer>
                        <Right4thAnd5thTitleContainer>
                            <Right4thAnd5thTitle>Design</Right4thAnd5thTitle>
                        </Right4thAnd5thTitleContainer>
                        <Right4thAnd5thSpread>
                            <SpreadIconGray />
                        </Right4thAnd5thSpread>
                    </Right4thAnd5thTitleAndSpreadContainer>
                </Right4thAnd5thContainer>
                <Right4thAnd5thUlContainer>
                    <Right4thAnd5thUl>
                        {todosDesign.map((todo, id) => {
                            return (
                                <Right4thAnd5thLi>
                                    <input
                                        type="checkbox"
                                        onChange={() =>
                                            handleCompleteTodo(todo, id)
                                        }
                                    ></input>
                                    <Right4thAnd5thLiLabel
                                        style={{
                                            color: todo.completed
                                                ? "gray"
                                                : "black",
                                        }}
                                    >
                                        {todo.title}
                                    </Right4thAnd5thLiLabel>
                                </Right4thAnd5thLi>
                            );
                        })}
                        <Right4thAnd5thLi>
                            <AddItemButton
                                onClick={() => handleAddButtonClick()}
                                style={{
                                    display: showInput ? "none" : "flex",
                                }}
                            >
                                + Add Item
                            </AddItemButton>
                            <form
                                onSubmit={handleSubmit}
                                style={{
                                    display: showInput ? "flex" : "none",
                                }}
                            >
                                <label>
                                    <input
                                        name="item" //what is this? why does the input need a name?
                                        type="text"
                                        placeholder="Add Todo"
                                        value={todoName}
                                        onChange={(e) =>
                                            setTodoName(e.target.value)
                                        }
                                    />
                                </label>
                            </form>
                        </Right4thAnd5thLi>
                    </Right4thAnd5thUl>
                </Right4thAnd5thUlContainer>
            </Route>
            <Route path="/home/notes">
                <MemesContainer>
                    <MemesCSS src={NotesMeme} alt="" />
                    {apiTodo && (
                        <ul>
                            {apiTodo.map((items) => (
                                <li key={items.id}>{items.title}</li>
                            ))}
                        </ul>
                    )}
                </MemesContainer>
            </Route>
            <Route path="/home/links">
                <MemesContainer>
                    <MemesCSS src={LinksMeme} alt="" />
                </MemesContainer>
            </Route>
            <Route path="/home/files">
                <MemesContainer>
                    <MemesCSS src={RickMeme} alt="" />
                </MemesContainer>
            </Route>
        </>
    );
};
export default withRouter(TodosTab);
const MemesContainer = styled.div`
    display: flex;
    flex-direction: column;
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
`;
const MemesCSS = styled.img`
    object-fit: contain;
    max-width: 30rem;
    max-height: 30rem;
`;
const TopRight3rdContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    border-top: solid;
    border-color: lightgray;
    border-width: 0.1rem;
    justify-content: flex-start;
    align-items: flex-start;
`;
const TopRight3rdUl = styled.ul`
    margin-left: 2rem;
    padding: 0;
`;
const TopRight3rdLi = styled.li`
    align-items: center;
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0.3rem;
`;
const Right4thAnd5thContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const Right4thAnd5thTitleAndSpreadContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 3rem;
    margin-left: 2rem;
    border-bottom: solid;
    border-color: lightgray;
    border-width: 0.1rem;
`;
const Right4thAnd5thTitleContainer = styled.div``;
const Right4thAnd5thTitle = styled.h4`
    margin: 0.5rem 0 0.5rem 0;
`;
const Right4thAnd5thSpread = styled.div`
    &:hover {
        cursor: pointer;
    }
`;
const Right4thAnd5thUlContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: inherit;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    justify-content: flex-start;
    align-items: flex-start;
`;
const Right4thAnd5thUl = styled.ul`
    margin-left: 2rem;
    padding: 0;
    width: 65vw;
`;
// There has got to be a better way to do the width here ^
const Right4thAnd5thLi = styled.li`
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0.3rem;
    border-radius: 5px;
    &: hover {
        background: lightgray;
    }
`;
const Right4thAnd5thLiLabel = styled.span`
    margin: 0;
    font-size: small;
    width: 100%;
`;
const AddItemButton = styled.button`
    display: flex;
    align-items: center;
    background: none;
    padding: 0 6px 0 4.5px;
    border: none;
    font-size: 0.7rem;
    width: auto;
    color: ${COLORS.blue};
    &:hover {
        cursor: pointer;
    }
`;
// const AddItemButtonSpan = styled.span`
//     font-size: 0.7rem;
//     padding-left: 3px;
//     color: ${COLORS.blue};
// `;
const TopRight2ndContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
`;
const TopRight2ndTabsContainer = styled.div`
    display: flex;
    flex-direction: row;
`;
const TopRight2ndTabs = styled.button`
    justify-content: space-between;
    padding: 0;
    display: flex;
    margin-right: 2rem;
    width: 4rem;
    height: 2rem;
    border-style: none;
    background: none;
    &:hover {
        cursor: pointer;
    }
    &:focus {
        transition: 0.1s;
        border-bottom: solid;
        border-width: 0.15rem;
        border-color: ${COLORS.blue};
    }
`;
const TopRight2ndTabsTodos = styled.button`
    justify-content: space-between;
    padding: 0;
    display: flex;
    margin-right: 2rem;
    width: 4rem;
    height: 2rem;
    border-style: none;
    background: none;
    &:hover {
        cursor: pointer;
    }
    &:focus {
        transition: 0.1s;
        border-bottom: solid;
        border-width: 0.15rem;
        border-color: ${COLORS.blue};
    }
`;
const TopRight2ndTabsNotes = styled.button`
    justify-content: space-between;
    padding: 0;
    display: flex;
    margin-right: 2rem;
    width: 4rem;
    height: 2rem;
    border-style: none;
    background: none;
    &:hover {
        cursor: pointer;
    }
    &:focus {
        transition: 0.1s;
        border-bottom: solid;
        border-width: 0.15rem;
        border-color: ${COLORS.blue};
    }
`;
const TopRight2ndTabsButton = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border-style: none;
    background-color: lightgray;
    color: ${COLORS.blue};
    font-size: 9px;
    width: 1rem;
    height: 1rem;
`;
