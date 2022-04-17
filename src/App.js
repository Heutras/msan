import Sidebar from "./components/Sidebar.js"
import Sec from "./components/Sec.js"
import AboutRight from "./components/AboutRight.js"
import AboutLeft from "./components/AboutLeft.js"
import WelcomeText from "./components/WelcomeText.js"
import WelcomeImg from "./components/WelcomeImg.js"
import './App.css';


export default function App() {
  return (
    <div className="App">
      <Sidebar pageWrapId={ "Wrapper" } outerContainerId={ "App" }/>
      <main id="Wrapper">
        <Sec left={<WelcomeText/>} right={<WelcomeImg/>}/>
        <Sec left={<WelcomeText/>} right={<AboutRight/>}/>
      </main> 
    </div>
  );
}
