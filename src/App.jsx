//design should look like this https://bashooka.com/wp-content/uploads/2018/11/to-do-app-ui-design-5.jpg
import TodoList from "./components/TodoList";

import styled from "styled-components";

function App() {
    return (
        <>
            <BodyCSS>
                <MainDivCSS>
                    <FarLeftBarCSS>
                        <TopULFarLeftBarCSS>
                            <button>Home</button>
                            <button>Inbox</button>
                            <button>Star</button>
                            <button>Calendar</button>
                            <button>Check</button>
                            <button>Trash</button>
                        </TopULFarLeftBarCSS>
                    </FarLeftBarCSS>
                    <LeftBarCSS></LeftBarCSS>
                    <RightBoxCSS></RightBoxCSS>
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

const FarLeftBarCSS = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    width: 5vw;
    height: 100%;
    background: rgb(26, 140, 255);
    border-radius: 2rem 0 0 2rem;
    display: flex;
    flex-direction: column;
`;

const TopULFarLeftBarCSS = styled.ul``;

const LeftBarCSS = styled.div`
    position: absolute;
    left: 5vw;
    width: 10vw;
    height: 100%;
    border-right-style: solid;
    border-width: 0.1rem;
    border-color: lightgray;
`;

const RightBoxCSS = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 15vw;
    width: 75vw;
    height: 100%;
    border-radius: 0 2rem 2rem 0;
    border-style: none;
`;
