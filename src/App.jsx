//design should look like this https://bashooka.com/wp-content/uploads/2018/11/to-do-app-ui-design-5.jpg
import TodoList from "./components/TodoList";

import styled from "styled-components";

function App() {
    return (
        <>
            <Body>
                <MainDiv>
                    <FarLeftBar></FarLeftBar>
                    <LeftBar></LeftBar>
                    <RightBox></RightBox>
                </MainDiv>
            </Body>
        </>
    );
}

export default App;

const Body = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const MainDiv = styled.div`
    width: 90vw;
    height: 90vh;
    margin: auto;
    border-radius: 2rem;
    background-color: white;
    -webkit-box-shadow: 0px 8px 18px 0px rgba(0, 0, 0, 0.32);
    box-shadow: 0px 8px 18px 0px rgba(0, 0, 0, 0.32);
`;

const FarLeftBar = styled.div`
    position: absolute;
    left: 0;
    width: 5vw;
    height: 100%;
    background: rgb(26, 140, 255);
    border-radius: 2rem 0 0 2rem;
    display: flex;
    flex-direction: column;
`;

const LeftBar = styled.div`
    position: absolute;
    left: 5vw;
    width: 10vw;
    height: 100%;
    border-right-style: solid;
    border-width: 0.1rem;
    border-color: lightgray;
`;

const RightBox = styled.div`
    display: flex;
    position: absolute;
    left: 15vw;
    width: 75vw;
    height: 100%;
    border-radius: 0 2rem 2rem 0;
    border-style: none;
`;