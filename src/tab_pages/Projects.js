import ToDoList from '../pictures/ToDoList.png';
import FlashCardsApp from '../pictures/FlashCardsApp.png';
import RoomEasy from '../pictures/roomEasy.png';
import Portfolio from '../pictures/Portfolio.png';
import {useState} from "react";
import './Projects.css';

function Projects() {
    const [showToDoList, setShowToDoList] = useState(false);
    const [showFlashCards, setShowFlashCards] = useState(false);
    const [showRoomEasy, setShowRoomEasy] = useState(false);
    const [showPortfolio, setShowPortfolio] = useState(false);

    function toggleShowToDoList() {
        setShowToDoList(!showToDoList);
    }

    function toggleShowFlashCards() {
        setShowFlashCards(!showFlashCards);
    }

    function toggleShowRoomEasy() {
        setShowRoomEasy(!showRoomEasy);
    }

    function toggleShowPortfolio() {
        setShowPortfolio(!showPortfolio);
    }

    return <> {!showToDoList && !showFlashCards && !showRoomEasy && !showPortfolio ?
        <div>
            <div className={"container"}>
                <img src={ToDoList} alt="ToDoList" height={300} onClick={toggleShowToDoList}/>
                <img src={FlashCardsApp} alt="FlashCardsApp" height={300} onClick={toggleShowFlashCards}/>
                <img src={RoomEasy} alt="RoomEasy" height={300} onClick={toggleShowRoomEasy}/>
                <img src={Portfolio} alt="Portfolio" height={300} onClick={toggleShowPortfolio}/>
            </div>
        </div>
        : <> {showToDoList ?
        <div>
            <button onClick={toggleShowToDoList}>Back</button>
            <h1>To Do List Project</h1>
        </div>
            : <> {showFlashCards ?
            <div>
                <button onClick={toggleShowFlashCards}>Back</button>
                <h1>Flashcards App</h1>
            </div>
            : <> {showRoomEasy ?
                    <div>
                        <button onClick={toggleShowRoomEasy}>Back</button>
                        <h1>RoomEasy App</h1>
                    </div>
            : <div>
                    <button onClick={toggleShowPortfolio}>Back</button>
                    <h1>Portfolio</h1>
                </div>}
                </>}
            </>}
        </>}
    </>
}

export default Projects;