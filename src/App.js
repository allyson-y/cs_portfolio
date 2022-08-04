import './App.css';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import Work from "./tab_pages/Work";
import AboutMe from "./tab_pages/AboutMe";
import Resume from "./tab_pages/Resume";
import './fonts/OpenSans-Medium.ttf';
import {useState} from "react";

function App() {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className="App">
            <header className="App-header">
                <div className = "tabs">
                    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList>
                            <Tab>Work</Tab>
                            <Tab>About Me</Tab>
                            <Tab>Resume</Tab>
                        </TabList>
                        <TabPanel>
                            <Work/>
                        </TabPanel>
                        <TabPanel>
                            <AboutMe/>
                        </TabPanel>
                        <TabPanel>
                            <Resume/>
                        </TabPanel>
                    </Tabs>
                </div>
            </header>
        </div>
    );
}

export default App;