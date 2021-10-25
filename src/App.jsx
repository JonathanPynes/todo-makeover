//design should look like this https://bashooka.com/wp-content/uploads/2018/11/to-do-app-ui-design-5.jpg
import TodoList from "./components/TodoList";
import LogoIcon from "./icons/logo.svg";
import InboxIcon from "./icons/inbox.svg";
import StarIcon from "./icons/star_border.svg";
import CalendarIcon from "./icons/calendar_today.svg";
import CheckedIcon from "./icons/check.svg";
import TrashIcon from "./icons/delete_outline.svg";
import ProfileImg from "./img/profile.jpg";
import SpreadIcon from "./icons/spread.svg";
import styled from "styled-components";

function App() {
    return (
        <>
            <BodyCSS>
                <MainDivCSS>
                    <FarLeftBarCSS>
                        <IconsFarLeftBarCSS>
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

                            {/* Probably a better way to do the last bit below, would love a tip for the css below... I thought padding-top: auto would work but no? */}

                            <ProfileButton>
                                <ProfileImgCSS src={ProfileImg} alt="profile" />
                            </ProfileButton>
                            <SpreadIconButton>
                                <img src={SpreadIcon} alt="menu" />
                            </SpreadIconButton>
                        </IconsFarLeftBarCSS>
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

const IconsFarLeftBarCSS = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
`;

const IconButton = styled.button`
    padding: 3rem 0 0 0;
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
