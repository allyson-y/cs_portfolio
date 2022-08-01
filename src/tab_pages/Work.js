import PureStorage from '../pictures/PureLogo.png';
import JuniLearning from '../pictures/JuniLogo.png';
import BearHouse from '../pictures/BearHouseLogo.png';
import Microsoft from '../pictures/MicrosoftLogo.png';
import RoomEasy from '../pictures/RoomEasy.png';
import ToDoList from '../pictures/ToDoList.png';
import Portfolio from '../pictures/PortfolioLogo.png';
import FlashCardsApp from '../pictures/FlashCardsAppLogo.png';
import {useState} from "react";
import './Work.css';

function Work() {
    const [showRoomEasy, setShowRoomEasy] = useState(false);
    const [showToDoList, setShowToDoList] = useState(false);
    const [showPortfolio, setShowPortfolio] = useState(false);
    const [showFlashCards, setShowFlashCards] = useState(false);

    function toggleShowRoomEasy() {
        setShowRoomEasy(!showRoomEasy);
    }

    function toggleShowToDoList() {
        setShowToDoList(!showToDoList);
    }

    function toggleShowPortfolio() {
        setShowPortfolio(!showPortfolio);
    }

    function toggleShowFlashCards() {
        setShowFlashCards(!showFlashCards);
    }

    //TODO: work on hover

    return <>
        {!showRoomEasy && !showToDoList  && !showPortfolio && !showFlashCards ?
        <div>
            <div>
                Experience
            </div>
            <div className={"container"}>
                <img src={PureStorage} alt={"PureStorage"} height={300}/>
                <img src={JuniLearning} alt={"JuniLearning"} height={300}/>
                <img src={BearHouse} alt={"BearHouse"} height={300}/>
                <img src={Microsoft} alt={"Microsoft"} height={300}/>
            </div>
            <div>
                Projects
            </div>
            <div className={"container"}>
                <img onMouseOver={() => console.log("hover")} src={RoomEasy} alt="RoomEasy" height={300} onClick={toggleShowRoomEasy}/>
                <img src={ToDoList} alt="ToDoList" height={300} onClick={toggleShowToDoList}/>
                <img src={Portfolio} alt="Portfolio" height={300} onClick={toggleShowPortfolio}/>
                <img src={FlashCardsApp} alt="FlashCardsApp" height={300} onClick={toggleShowFlashCards}/>
            </div>
        </div>
        : <> {showRoomEasy ?
            <div>
                <button onClick={toggleShowRoomEasy}>Back</button>
                <h1>RoomEasy App</h1>
            </div>
            : <> {showToDoList ?
                <div>
                    <button onClick={toggleShowToDoList}>Back</button>
                    <h1>To Do List Project</h1>
                </div>
                : <> {showPortfolio ?
                    <div>
                        <button onClick={toggleShowPortfolio}>Back</button>
                        <h1>Portfolio</h1>
                    </div>
                    : <div>
                            <button onClick={toggleShowFlashCards}>Back</button>
                            <h1>Flashcards App</h1>
                    </div>}
                </>}
            </>}
        </>}
    </>
}

export default Work;