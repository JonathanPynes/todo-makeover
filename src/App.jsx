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
                                <h1>Design</h1>
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
                                    <input type="checkbox"></input>Project page
                                </TopRight3rdLi>
                                <TopRight3rdLi>
                                    <input type="checkbox"></input>Today page
                                </TopRight3rdLi>
                            </TopRight3rdUl>
                        </TopRight3rdContainer>
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
const TopRightMenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 3rem;
    justify-content: center;
`;
const TopRightMenuButtons = styled.button`
    background: none;
    border: none;
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
    width: 5rem;
    height: 2rem;
    border-style: none;
    background: none;
    &:focus {
        border-bottom: solid;
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
    font-size: small;
    width: 1rem;
    height: 1rem;
`;
const TopRight3rdContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 10rem;
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
    list-style-type: none;
    margin: 0;
`;
