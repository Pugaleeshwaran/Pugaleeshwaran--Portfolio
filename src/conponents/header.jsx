import profile from "../images/bg.jpg"

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <img src={profile} alt="" />
                <h2>Pugaleeshwaran </h2>
                <a href="#">Home</a>
                <a href="#">About Me</a>
                <a href="#">My Work</a>
                <a href="#">Resume</a>
                <a href="#">Contact</a>
                <div className="header-left-logo">
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-solid fa-paper-plane"></i>
                    <i className="fa-brands fa-square-github"></i>

                </div>
            </div>
            <div className="header-right">
                <div className="header-right-text">
                    <h1>WelCome</h1>
                    <h2 className="myname"><span></span></h2>
                    
                    <h2 className="based">Based in Chennai,TamilNadu,India.</h2>
                    <a href="#">Hire Me</a>
                </div>
                <div className="header-right-bg">

                </div>
                

            </div>
        </div>
    )
}
export default Header