import cfc from "../assets/CFC.png"
import home from "../assets/Home.png"
import { Link } from "react-router-dom"
const Project = () => {
    return (
        <div className="project">
            <div className="project-img">
                <div className="project-img-tfc">
                    <img src={cfc} />
                    <div className="project-img-tfc-con">
                        <h3>TFC Nation</h3>
                        <p>Fully Responsive Webside UI build using HTML,CSS.</p>
                        <Link to={"https://pugaleeshwaran.github.io/TFC-web-project/"} ><button>Visit site</button></Link>
                    </div>
                </div>
                <div className="project-img-tfc" >
                    <img src={home} alt="" />
                    <div className="project-img-tfc-con">
                        <h3>Amezon Prime Clone</h3>
                        <p>a clean and modern frontend experience inspired by Amazon Prime Video.</p>
                        <Link to={"https://pugaleeshwaran.github.io/Amazon_prime_clone/"} ><button>Visit site</button></Link>
                    </div>
                </div>
                <div className="project-img-more">
                    <h3>Visit My all Project</h3>
                    <p>Click the Button below to explore more Project and See My Full Range of Work !</p>
                    <Link to={"/allproject"}><button>View ALL Project</button></Link>
                </div>


            </div>

        </div>
    )
}
export default Project