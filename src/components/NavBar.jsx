import LogoIcon from "../icons/logo.svg";
import InboxIcon from "../icons/inbox.jsx";
import StarIcon from "../icons/StarIcon.jsx";
import CalendarIcon from "../icons/calendar_today.svg";
import CheckedIcon from "../icons/check.svg";
import TrashIcon from "../icons/delete_outline.svg";
import ProfileImg from "../img/profile.jpg";
import SpreadIcon from "../icons/spread.svg";
import styled from "styled-components";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    withRouter,
    useLocation,
} from "react-router-dom";

const NavBar = () => {
    let history = useHistory();
    let location = useLocation();
    console.log(location);
    return (
        <FarLeftBarCSS>
            <IconsFarLeftBarCSS>
                <IconsTopContainer>
                    <IconButton onClick={() => history.push("/home")}>
                        <img src={LogoIcon} alt="home" />
                    </IconButton>
                    <IconButton onClick={() => history.push("/inbox")}>
                        <InboxIcon
                            color={
                                location.pathname === "/inbox"
                                    ? "white"
                                    : "lightgray"
                            }
                        />
                    </IconButton>
                    <IconButton onClick={() => history.push("/star")}>
                        <StarIcon
                            color={
                                location.pathname === "/star"
                                    ? "white"
                                    : "lightgray"
                            }
                        />
                    </IconButton>
                    <IconButton onClick={() => history.push("/calendar")}>
                        <img src={CalendarIcon} alt="calendar" />
                    </IconButton>
                    <IconButton onClick={() => history.push("/checked")}>
                        <img src={CheckedIcon} alt="check" />
                    </IconButton>
                    <IconButton onClick={() => history.push("/trash")}>
                        <img src={TrashIcon} alt="delete" />
                    </IconButton>
                </IconsTopContainer>
                {/* Probably a better way to do the last bit below, would love a css tip... I thought padding-top: auto; would work - but no? */}
                <IconsBottomContainer>
                    <ProfileButton>
                        <ProfileImgCSS src={ProfileImg} alt="profile" />
                    </ProfileButton>
                    <SpreadIconButton>
                        <img src={SpreadIcon} alt="menu" />
                    </SpreadIconButton>
                </IconsBottomContainer>
            </IconsFarLeftBarCSS>
        </FarLeftBarCSS>
    );
};
export default withRouter(NavBar);

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
    &:hover {
        cursor: pointer;
        color: white;
    }
`;

const ProfileButton = styled.button`
    padding-top: 15rem;
    border: none;
    background: none;
    &:hover {
        cursor: pointer;
    }
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
    &:hover {
        cursor: pointer;
    }
`;
