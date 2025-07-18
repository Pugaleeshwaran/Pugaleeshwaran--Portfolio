import cfc from "../assets/CFC.png"
import home from "../assets/Home.png"
import { Link } from "react-router-dom"
const Project=(props)=>{
    return(
        <div className="project-list">
            <img src={props.img} alt="" />
            <div className="project-list-con">
                        <h3>{props.head}</h3>
                        <p>{props.para}</p>
                        <Link to={props.link} ><button>Visit site</button></Link>
                    </div>
        </div>
    )
}
export default Project