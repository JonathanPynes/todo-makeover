//design should look like this https://bashooka.com/wp-content/uploads/2018/11/to-do-app-ui-design-5.jpg
import TodoList from "./components/TodoList";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import LogoIcon from "./icons/logo.svg";
import InboxIcon from "./icons/inbox.svg";
import StarIcon from "./icons/star_border.svg";
import CalendarIcon from "./icons/calendar_today.svg";
import CheckedIcon from "./icons/check.svg";
import TrashIcon from "./icons/delete_outline.svg";
import ProfileImg from "./img/profile.jpg";
import SpreadIcon from "./icons/spread.svg";
import BlueCircle from "./icons/blueCircle.svg";
import GreenCircle from "./icons/greenCircle.svg";
import RedCircle from "./icons/redCircle.svg";
import COLORS from "./Colors";
import styled from "styled-components";
import PlusButton from "./icons/plusButton.png";
import SpreadIconGray from "./icons/spreadGray.svg";
import GreenCheckCircle from "./icons/greenCheckCircle.svg";
import RedXCircle from "./icons/redXCircle.svg";
import PurpleCalendarCircle from "./icons/purpleCalendarCircle.svg";
import GreenLabelCircle from "./icons/greenLabelCircle.svg";
import PurpleSearchCircle from "./icons/purpleSearchCircle.svg";
import OrangePlusCircle from "./icons/orangePlusCircle.svg";
import BluePlusCircle from "./icons/bluePlusCircle.svg";

function App() {
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
    const handleAddButtonClick = () => {
        setShowInput((current) => !current);
        console.log(showInput);
    };
    return (
        <>
            <BodyCSS>
                <MainDivCSS>
                    <FarLeftBarCSS>
                        <IconsFarLeftBarCSS>
                            <IconsTopContainer>
                                <IconButton onClick={console.log("clicked")}>
                                    <img src={LogoIcon} alt="home" />
                                </IconButton>
                                <IconButton>
                                    <img src={InboxIcon} alt="inbox" />
                                </IconButton>
                                <IconButton>
                                    <img src={StarIcon} alt="star" />
                                </IconButton>
                                <IconButton>
                                    <img src={CalendarIcon} alt="calendar" />
                                </IconButton>
                                <IconButton>
                                    <img src={CheckedIcon} alt="check" />
                                </IconButton>
                                <IconButton>
                                    <img src={TrashIcon} alt="delete" />
                                </IconButton>
                            </IconsTopContainer>
                            {/* Probably a better way to do the last bit below, would love a css tip... I thought padding-top: auto; would work - but no? */}
                            <IconsBottomContainer>
                                <ProfileButton>
                                    <ProfileImgCSS
                                        src={ProfileImg}
                                        alt="profile"
                                    />
                                </ProfileButton>
                                <SpreadIconButton>
                                    <img src={SpreadIcon} alt="menu" />
                                </SpreadIconButton>
                            </IconsBottomContainer>
                        </IconsFarLeftBarCSS>
                    </FarLeftBarCSS>

                    <LeftBarCSS>
                        <TopBarContainer>
                            <div>
                                <ProjectsH4>
                                    <BlueCircleCSS src={BlueCircle} />
                                    Projects
                                </ProjectsH4>
                                <FarLeftUl>
                                    <FarLeftLi>EverDo</FarLeftLi>
                                    <FarLeftLi>Gemsmark</FarLeftLi>
                                    <FarLeftLi>Rubicon</FarLeftLi>
                                </FarLeftUl>
                            </div>
                            <div>
                                <PersonalH4>
                                    <GreenCircleCSS src={GreenCircle} />
                                    Personal
                                </PersonalH4>
                                <FarLeftUl>
                                    <FarLeftLi>Shopping</FarLeftLi>
                                    <FarLeftLi>Health</FarLeftLi>
                                    <FarLeftLi>Entertainment</FarLeftLi>
                                </FarLeftUl>
                            </div>
                            <div>
                                <LearningH4>
                                    <RedCircleCSS src={RedCircle} />
                                    Learning
                                </LearningH4>
                                <FarLeftUl>
                                    <FarLeftLi>Electron</FarLeftLi>
                                    <FarLeftLi>Flexbox</FarLeftLi>
                                </FarLeftUl>
                            </div>
                        </TopBarContainer>
                        <PlusButtonContainer>
                            <PlusButtonCSS>
                                <img src={PlusButton} alt="add" />
                            </PlusButtonCSS>
                        </PlusButtonContainer>
                    </LeftBarCSS>
                    <RightBoxCSS>
                        <TopRightSpanContainer>
                            <TopRightSpan>
                                <TopRightSpanColor>EverDo - </TopRightSpanColor>
                                MVP
                            </TopRightSpan>
                        </TopRightSpanContainer>
                        <TopRightBoxContainer>
                            <TopRightH1Container>
                                <TopRightH1>Design</TopRightH1>
                            </TopRightH1Container>
                            <TopRightMenuContainer>
                                <TopRightMenuButtons>All</TopRightMenuButtons>
                                <TopRightMenuButtons>1h</TopRightMenuButtons>
                                <TopRightMenuButtons>2h</TopRightMenuButtons>
                                <TopRightMenuButtons>Work</TopRightMenuButtons>
                            </TopRightMenuContainer>
                        </TopRightBoxContainer>
                        <TopRight2ndContainer>
                            <TopRight2ndTabsContainer>
                                <TopRight2ndTabs>
                                    <TopRight2ndTabsButton>
                                        10
                                    </TopRight2ndTabsButton>
                                    Todos
                                </TopRight2ndTabs>
                                <TopRight2ndTabs>
                                    <TopRight2ndTabsButton>
                                        5
                                    </TopRight2ndTabsButton>
                                    Notes
                                </TopRight2ndTabs>
                                <TopRight2ndTabs>
                                    <TopRight2ndTabsButton></TopRight2ndTabsButton>
                                    Links
                                </TopRight2ndTabs>
                                <TopRight2ndTabs>
                                    <TopRight2ndTabsButton></TopRight2ndTabsButton>
                                    Files
                                </TopRight2ndTabs>
                            </TopRight2ndTabsContainer>
                        </TopRight2ndContainer>
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
                                    <img src={SpreadIconGray} alt="more" />
                                </Right4thAnd5thSpread>
                            </Right4thAnd5thTitleAndSpreadContainer>
                        </Right4thAnd5thContainer>
                        <Right4thAnd5thUlContainer>
                            <Right4thAnd5thUl>
                                {todosProductPlanning.map((todo, id) => {
                                    return (
                                        <Right4thAnd5thLi>
                                            <input type="checkbox"></input>
                                            <Right4thAnd5thLiLabel>
                                                todosProductPlanning.title
                                            </Right4thAnd5thLiLabel>
                                        </Right4thAnd5thLi>
                                    );
                                })}
                            </Right4thAnd5thUl>
                        </Right4thAnd5thUlContainer>
                        <Right4thAnd5thContainer>
                            <Right4thAnd5thTitleAndSpreadContainer>
                                <Right4thAnd5thTitleContainer>
                                    <Right4thAnd5thTitle>
                                        Design
                                    </Right4thAnd5thTitle>
                                </Right4thAnd5thTitleContainer>
                                <Right4thAnd5thSpread>
                                    <img src={SpreadIconGray} alt="more" />
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
                                                        : "inherit",
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
                                            display: showInput
                                                ? "none"
                                                : "flex",
                                        }}
                                    >
                                        + Add Item
                                    </AddItemButton>
                                    <form
                                        onSubmit={handleSubmit}
                                        style={{
                                            display: showInput
                                                ? "flex"
                                                : "none",
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
                        <BottomToolBarContainer>
                            <BottomToolBarLeft>
                                <BottomToolBarButtonLeft>
                                    <img src={GreenCheckCircle} alt="" />
                                </BottomToolBarButtonLeft>
                                <BottomToolBarButtonLeft>
                                    <img src={RedXCircle} alt="" />
                                </BottomToolBarButtonLeft>
                                <BottomToolBarButtonLeft>
                                    <img src={PurpleCalendarCircle} alt="" />
                                </BottomToolBarButtonLeft>
                                <BottomToolBarButtonLeft>
                                    <img src={GreenLabelCircle} alt="" />
                                </BottomToolBarButtonLeft>
                                <BottomToolBarButtonLeft>
                                    <img src={PurpleSearchCircle} alt="" />
                                </BottomToolBarButtonLeft>
                                <BottomToolBarButtonLeft>
                                    <img src={OrangePlusCircle} alt="" />
                                </BottomToolBarButtonLeft>
                            </BottomToolBarLeft>
                            <BottomToolBarRight>
                                <BottomToolBarButtonRight>
                                    <img src={BluePlusCircle} alt="" />
                                </BottomToolBarButtonRight>
                            </BottomToolBarRight>
                        </BottomToolBarContainer>
                    </RightBoxCSS>
                </MainDivCSS>
            </BodyCSS>
        </>
    );
}

export default App;

const BodyCSS = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const MainDivCSS = styled.div`
    width: 90vw;
    height: 90vh;
    margin: auto;
    border-radius: 2rem;
    background-color: white;
    -webkit-box-shadow: 0px 8px 18px 0px rgba(0, 0, 0, 0.32);
    box-shadow: 0px 8px 18px 0px rgba(0, 0, 0, 0.32);
`;

// -----------FarLeft Start-----------

const FarLeftBarCSS = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    width: 5vw;
    height: 100%;
    background: #1a8cff;
    border-radius: 2rem 0 0 2rem;
    display: flex;
    flex-direction: column;
`;

const IconsFarLeftBarCSS = styled.ul`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0;
    padding: 0;
    justify-content: space-between;
`;

const IconsTopContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const IconsBottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

const IconButton = styled.button`
    padding: 1.5rem 0 0 0;
    border: none;
    background: none;
`;

const ProfileButton = styled.button`
    padding-top: 15rem;
    border: none;
    background: none;
`;
const ProfileImgCSS = styled.img`
    height: 2.5rem;
    width: 2.5rem;
    object-fit: cover;
    border-radius: 50%;
`;

const SpreadIconButton = styled.button`
    padding: 1rem 0 0 0;
    border: none;
    background: none;
`;

// ----------FarLeft End----------

// ---------LeftBar Start--------

const LeftBarCSS = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    left: 5vw;
    width: 15vw;
    height: 100%;
    border-right-style: solid;
    border-width: 0.1rem;
    border-color: lightgray;
`;

const TopBarContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const ProjectsH4 = styled.h4`
    color: ${COLORS.blue};
    padding-left: 2rem;
    margin: 3rem 0 0 0;
`;
const PersonalH4 = styled.h4`
    color: ${COLORS.green};
    margin: 3rem 0 0 0;
    padding-left: 2rem;
`;
const LearningH4 = styled.h4`
    color: ${COLORS.red};
    margin: 3rem 0 0 0;
    padding-left: 2rem;
`;
const BlueCircleCSS = styled.img`
    margin-right: 1rem;
`;
const GreenCircleCSS = styled.img`
    margin-right: 1rem;
`;
const RedCircleCSS = styled.img`
    margin-right: 1rem;
`;
const FarLeftUl = styled.ul`
    padding-left: 4rem;
    margin: 0;
`;
const FarLeftLi = styled.li`
    list-style-type: none;
    padding-top: 1rem;
    font-size: small;
`;

const PlusButtonContainer = styled.div`
    display: flex;
    margin-bottom: 30px;
    flex-direction: column;
    align-items: center;
    flex-direction: column;
`;
const PlusButtonCSS = styled.button`
    border: none;
    background: none;
`;

// ---------- LeftBar End ----------

// ----------- RightBox Start ----------

const RightBoxCSS = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 20vw;
    width: 70vw;
    height: 100%;
    border-radius: 0 2rem 2rem 0;
    border-style: none;
`;
const TopRightSpanContainer = styled.div`
    display: flex;
    flex-direction: row;
`;
const TopRightSpan = styled.span`
    margin-left: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const TopRightSpanColor = styled.p`
    color: ${COLORS.blue};
    font-weight: bold;
    margin-right: 0.3rem;
`;
const TopRightBoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const TopRightH1Container = styled.div`
    display: flex;
    font-size: large;
    padding-left: 2rem;
`;
const TopRightH1 = styled.h1`
    margin-top: 0;
`;
const TopRightMenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 3rem;
    justify-content: center;
`;
const TopRightMenuButtons = styled.button`
    background: none;
    border: none;
    &: focus {
        transition: 0.33s;
        background: ${COLORS.blue};
        border-radius: 50px;
        width: inherit;
        color: white;
    }
`;
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
const Right4thAnd5thSpread = styled.div``;
const Right4thAnd5thUlContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 80rem;
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
`;
// const AddItemButtonSpan = styled.span`
//     font-size: 0.7rem;
//     padding-left: 3px;
//     color: ${COLORS.blue};
// `;
const BottomToolBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    height: 100%;
    margin-bottom: 30px;
`;
const BottomToolBarLeft = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-left: 2rem;
`;
const BottomToolBarButtonLeft = styled.button`
    background: none;
    border: none;
`;
const BottomToolBarRight = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 3rem;
    justify-content: center;
`;

const BottomToolBarButtonRight = styled.button`
    background: none;
    border: none;
`;
