import profile from "../images/bg.jpg"
import Sidebar from "./sideBar"

const Header = () => {
    return (
        <div className="header">
            <Sidebar/>
            <div className="header-right">
                <div className="header-right-text">
                    <h1>WelCome</h1>
                    <h2 className="myname"><span></span></h2>
                    
                    <h2 className="based">Based in Chennai,TamilNadu,India.</h2>
                    <a href="">Hire Me</a>
                </div>
                <div className="header-right-bg">

                </div>
                

            </div>
        </div>
    )
}
export default Header