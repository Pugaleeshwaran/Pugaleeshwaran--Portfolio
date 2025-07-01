import { useState } from "react"
import profile from "../images/bg.jpg"
const Sidebar=()=>{
    const [saw,setsaw]=useState(true)
    const togglemenu=()=>{
        setsaw(!saw)
    }

    return(
        <div>
            <div>
                <i className="fa-solid fa-bars" id="menubar" onClick={togglemenu}></i>
            <div className="header-left" style={{transform:saw?"translateX(0%)":"translateX(-100%)",transition:"all 1s"}}>
                <i className="fa-solid fa-xmark" id="close" onClick={togglemenu} style={{ transform:saw?"translateX(0%)":"translateX(-100%)",transition:"all 1s"}}></i>
                <img src={profile} alt="" />

                <h2>Pugaleeshwaran </h2>
                <a href=".header">Home</a>
                <a href=".about-all">About Me</a>
                <a href="#">My Work</a>
                <a href="#">Resume</a>
                <a href="#">Contact</a>
                <div className="header-left-logo">
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-solid fa-paper-plane"></i>
                    <i className="fa-brands fa-square-github"></i>

                </div>
            </div>
        </div>
        </div>
        
    )
}
export default Sidebar