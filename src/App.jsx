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
import BlueCircle from "./icons/blueCircle.svg";
import GreenCircle from "./icons/greenCircle.svg";
import RedCircle from "./icons/redCircle.svg";
import COLORS from "./Colors";
import styled from "styled-components";
import PlusButton from "./icons/plusButton.png";

function App() {
    return (
        <>
            <BodyCSS>
                <MainDivCSS>
                    <FarLeftBarCSS>
                        <IconsFarLeftBarCSS>
                            <div>
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
                            </div>
                            {/* Probably a better way to do the last bit below, would love a css tip... I thought padding-top: auto; would work - but no? */}
                            <div>
                                <ProfileButton>
                                    <ProfileImgCSS
                                        src={ProfileImg}
                                        alt="profile"
                                    />
                                </ProfileButton>
                                <SpreadIconButton>
                                    <img src={SpreadIcon} alt="menu" />
                                </SpreadIconButton>
                            </div>
                        </IconsFarLeftBarCSS>
                    </FarLeftBarCSS>

                    <LeftBarCSS>
                        <div>
                            <ProjectsH4>
                                <BlueCircleCSS src={BlueCircle} />
                                Projects
                            </ProjectsH4>
                            <FarLeftUl>
                                <FarLeftLi>v</FarLeftLi>
                                <FarLeftLi>v</FarLeftLi>
                                <FarLeftLi>v</FarLeftLi>
                            </FarLeftUl>
                        </div>
                        <div>
                            <PersonalH4>
                                <GreenCircleCSS src={GreenCircle} />
                                Personal
                            </PersonalH4>
                            <FarLeftUl>
                                <FarLeftLi>v</FarLeftLi>
                                <FarLeftLi>v</FarLeftLi>
                                <FarLeftLi>v</FarLeftLi>
                            </FarLeftUl>
                        </div>
                        <div>
                            <LearningH4>
                                <RedCircleCSS src={RedCircle} />
                                Learning
                            </LearningH4>
                            <FarLeftUl>
                                <FarLeftLi>v</FarLeftLi>
                                <FarLeftLi>v</FarLeftLi>
                                <FarLeftLi>v</FarLeftLi>
                            </FarLeftUl>
                        </div>
                        <PlusButtonContainer>
                            <PlusButtonCSS>
                                <img src={PlusButton} alt="add" />
                            </PlusButtonCSS>
                        </PlusButtonContainer>
                    </LeftBarCSS>
                    <RightBoxCSS>
                        <div>
                            <h1>Design</h1>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
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

// -----------ToolBar Start-----------

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

// ----------ToolBar End----------

// ---------LeftBar Start--------

const LeftBarCSS = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 5vw;
    width: 15vw;
    height: 100%;
    border-right-style: solid;
    border-width: 0.1rem;
    border-color: lightgray;
`;

const ProjectsH4 = styled.h4`
    color: ${COLORS.blue};
    margin: 7rem 0 0 0;
    padding-left: 2rem;
`;
const PersonalH4 = styled.h4`
    color: ${COLORS.green};
    margin: 4rem 0 0 0;
    padding-left: 2rem;
`;
const LearningH4 = styled.h4`
    color: ${COLORS.red};
    margin: 4rem 0 0 0;
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
    padding-left: 2rem;
    margin: 0;
`;
const FarLeftLi = styled.li`
    list-style-type: none;
    padding-top: 1rem;
`;
const PlusButtonContainer = styled.div`
    display: flex;
    height: 6.5rem;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
`;
const PlusButtonCSS = styled.button`
    border: none;
    background: none;
`;

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
