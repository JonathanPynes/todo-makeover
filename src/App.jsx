//design should look like this https://bashooka.com/wp-content/uploads/2018/11/to-do-app-ui-design-5.jpg
//https://tender-pike-d60a95.netlify.app

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    withRouter,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import BlueCircle from "./icons/blueCircle.svg";
import GreenCircle from "./icons/greenCircle.svg";
import RedCircle from "./icons/redCircle.svg";
import COLORS from "./Colors";
import styled from "styled-components";
import PlusButton from "./icons/plusButtonBig.svg";
import GreenCheckCircle from "./icons/greenCheckCircle.svg";
import RedXCircle from "./icons/redXCircle.svg";
import PurpleCalendarCircle from "./icons/purpleCalendarCircle.svg";
import GreenLabelCircle from "./icons/greenLabelCircle.svg";
import PurpleSearchCircle from "./icons/purpleSearchCircle.svg";
import OrangePlusCircle from "./icons/orangePlusCircle.svg";
import BluePlusCircle from "./icons/bluePlusCircle.svg";
import Tabs from "./components/Tabs";

function App() {
    return (
        <Router>
            <BodyCSS>
                <MainDivCSS>
                    <NavBar />
                    <Switch>
                        <Route path="/home">
                            <LeftBarCSS>
                                <TopBarContainer>
                                    <TopBarSectionContainer>
                                        <ProjectsH4>
                                            <BlueCircleCSS src={BlueCircle} />
                                            Projects
                                        </ProjectsH4>
                                        <FarLeftUl>
                                            <FarLeftLi>EverDo</FarLeftLi>
                                            <FarLeftLi>Gemsmark</FarLeftLi>
                                            <FarLeftLi>Rubicon</FarLeftLi>
                                        </FarLeftUl>
                                    </TopBarSectionContainer>
                                    <TopBarSectionContainer>
                                        <PersonalH4>
                                            <GreenCircleCSS src={GreenCircle} />
                                            Personal
                                        </PersonalH4>
                                        <FarLeftUl>
                                            <FarLeftLi>Shopping</FarLeftLi>
                                            <FarLeftLi>Health</FarLeftLi>
                                            <FarLeftLi>Entertainment</FarLeftLi>
                                        </FarLeftUl>
                                    </TopBarSectionContainer>
                                    <TopBarSectionContainer>
                                        <LearningH4>
                                            <RedCircleCSS src={RedCircle} />
                                            Learning
                                        </LearningH4>
                                        <FarLeftUl>
                                            <FarLeftLi>Electron</FarLeftLi>
                                            <FarLeftLi>Flexbox</FarLeftLi>
                                        </FarLeftUl>
                                    </TopBarSectionContainer>
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
                                        <TopRightSpanColor>
                                            EverDo -{" "}
                                        </TopRightSpanColor>
                                        MVP
                                    </TopRightSpan>
                                </TopRightSpanContainer>
                                <TopRightBoxContainer>
                                    <TopRightH1Container>
                                        <TopRightH1>Design</TopRightH1>
                                    </TopRightH1Container>
                                    <TopRightMenuContainer>
                                        <TopRightMenuButtons>
                                            All
                                        </TopRightMenuButtons>
                                        <TopRightMenuButtons>
                                            1h
                                        </TopRightMenuButtons>
                                        <TopRightMenuButtons>
                                            2h
                                        </TopRightMenuButtons>
                                        <TopRightMenuButtons>
                                            Work
                                        </TopRightMenuButtons>
                                    </TopRightMenuContainer>
                                </TopRightBoxContainer>
                                <Tabs />
                                <BottomToolBarContainer>
                                    <BottomToolBarLeft>
                                        <BottomToolBarButtonLeft>
                                            <img
                                                src={GreenCheckCircle}
                                                alt=""
                                            />
                                        </BottomToolBarButtonLeft>
                                        <BottomToolBarButtonLeft>
                                            <img src={RedXCircle} alt="" />
                                        </BottomToolBarButtonLeft>
                                        <BottomToolBarButtonLeft>
                                            <img
                                                src={PurpleCalendarCircle}
                                                alt=""
                                            />
                                        </BottomToolBarButtonLeft>
                                        <BottomToolBarButtonLeft>
                                            <img
                                                src={GreenLabelCircle}
                                                alt=""
                                            />
                                        </BottomToolBarButtonLeft>
                                        <BottomToolBarButtonLeft>
                                            <img
                                                src={PurpleSearchCircle}
                                                alt=""
                                            />
                                        </BottomToolBarButtonLeft>
                                        <BottomToolBarButtonLeft>
                                            <img
                                                src={OrangePlusCircle}
                                                alt=""
                                            />
                                        </BottomToolBarButtonLeft>
                                    </BottomToolBarLeft>
                                    <BottomToolBarRight>
                                        <BottomToolBarButtonRight>
                                            <img src={BluePlusCircle} alt="" />
                                        </BottomToolBarButtonRight>
                                    </BottomToolBarRight>
                                </BottomToolBarContainer>
                            </RightBoxCSS>
                        </Route>
                    </Switch>
                </MainDivCSS>
            </BodyCSS>
        </Router>
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

const TopBarSectionContainer = styled.div`
    width: 100%;
`;

const TopBarContainer = styled.div`
    width: 13vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1rem;
`;
const ProjectsH4 = styled.h4`
    display: flex;
    flex-direction: row;
    color: ${COLORS.blue};
    margin: 3rem 0 0 0;
`;
const PersonalH4 = styled.h4`
    display: flex;
    flex-direction: row;
    color: ${COLORS.green};
    margin: 3rem 0 0 0;
`;
const LearningH4 = styled.h4`
    display: flex;
    flex-direction: row;
    color: ${COLORS.red};
    margin: 3rem 0 0 0;
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
    padding: 0;
    margin: 0;
    width: 95%;
    align-content: flex-start;
    align-items: center;
`;
const FarLeftLi = styled.li`
    height: 1.5rem;
    width: auto;
    list-style-type: none;
    display: flex;
    align-items: center;
    margin-top: 1rem;
    padding-left: 2rem;
    border-radius: 5px;
    font-size: small;
    transition: color 0.1s;
    &:hover {
        background: #ecf6ff;
        color: ${COLORS.blue};
        font-weight: bold;
        cursor: pointer;
    }
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
    &:hover {
        cursor: pointer;
    }
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
    &:hover {
        cursor: pointer;
    }
    &: focus {
        transition: 0.33s;
        background: ${COLORS.blue};
        border-radius: 50px;
        width: inherit;
        color: white;
    }
`;

const BottomToolBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    height: 15rem;
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
    &:hover {
        cursor: pointer;
    }
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
    &:hover {
        cursor: pointer;
    }
`;
