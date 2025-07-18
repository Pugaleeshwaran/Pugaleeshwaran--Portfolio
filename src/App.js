import Header from "./conponents/header";
import About from "./conponents/about";
import Tilte from "./conponents/title";
import Project from "./conponents/project";
import Allproject from "./conponents/allproject";
function App() {
  return (
    <div>
      <Header />
      <About />
     <Tilte title={"projects"} sub={"my"} span={"W"} end="ork" bgcolor={"#343A40"}/>
     <Project/> 
    </div>

  );
}

export default App;

