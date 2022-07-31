import Headshot from "../pictures/portfolio_headshot.png";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <div className={"img"}>
                <img src={Headshot} alt="Headshot" height={500}/>
            </div>
            <div className={"text"}>
                Hello! My name is Allyson Yao, and this is my website! I am hoping this website can tell you a bit about me, some projects I have worked on, and some companies I have worked with.
            </div>
        </div>
    )
}

export default Home;