import Headshot from "../pictures/portfolio_headshot.png";
import "./AboutMe.css";

function AboutMe() {
    return (
        <div className="home">
            <div>
                <img src={Headshot} alt="Headshot" height={500}/>
            </div>
            <div className={"text"}>
                Hello! My name is Allyson Yao, and I am currently a junior at <span className={"purple"}> Harvey Mudd College </span> majoring in CS. I am also on the CMS Varsity Swim Team (Go Athenas!) and a Mentorship Coordinator in the Society of Women Engineers Club at Mudd.
            </div>
        </div>
    )
}

export default AboutMe;