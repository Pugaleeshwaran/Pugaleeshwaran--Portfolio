import Projectlist from "./projectlist"
import cfc from "../assets/CFC.png"
import home from "../assets/Home.png"
import act from "../images/act.png"
import chatbot from "../images/chatbot.png"
import green from "../images/greendan.png"
import menstra from "../images/menstra.png"
import perfumy from "../images/perfumy.png"
import trip from "../images/trip.png"
import udemy from "../images/udemy.png"
import weather from "../images/weather.png"
const Allproject = () => {
    return (
        <div className="all-project">
            <Projectlist head={"TFC Nation"} img={cfc} para={"Fully Responsive Webside UI build using HTML,CSS for Restaurants."} link={"https://pugaleeshwaran.github.io/TFC-web-project/"} />
            <Projectlist head={"Amezon Prime Clone"} img={home} para={"a clean and modern frontend experience inspired by Amazon Prime Video."} link={"https://pugaleeshwaran.github.io/Amazon_prime_clone/"} />
            <Projectlist head={"Udemy"} img={udemy} para={"built a Udemy Clone Website using HTML and CSS and React js and it’s fully responsive across all devices!"} link={"https://udemy-clone-react-apab.vercel.app/"} />
            <Projectlist head={"Act-Doto"} img={act} para={"Developed a responsive To-Do List web application with user-friendly interface and task management features."} link={"https://actdoto-react.vercel.app/"} />
            <Projectlist head={"Trip Adviser"} img={trip} para={"a clean and modern frontend experience inspired by Trip adviser."} link={"https://pugaleeshwaran.github.io/Trip_Advisor-Clone/"} />
            <Projectlist head={"Menstra"} img={menstra} para={" Menstra, an e-commerce website built using HTML, CSS, and JavaScript. This platform is designed to be fully responsive across all devices."} link={"https://pugaleeshwaran.github.io/menstra/"} />
            <Projectlist head={"Weather Report app"} img={weather} para={"Developed a weather application using JavaScript, HTML, CSS, and OpenWeather API Implemented real-time weather data fetching based on user input "} link={"https://weather-app-2qmb.vercel.app/"} />
            <Projectlist head={"Greendan"} img={green} para={" a fully responsive website built using HTML and Tailwind CSS and Java Script"} link={"https://pugaleeshwaran.github.io/greendon-webpage/"} />
            <Projectlist head={"Perfumy"} img={perfumy} para={" a fully responsive website built using HTML and css React Js"} link={"https://perfumy-react-lphd.vercel.app/"} />
            <Projectlist head={"Weather Report Chat Bot"} img={chatbot} para={"Developed a weather application with Chat Bot using JavaScript, HTML, CSS, and IBM Watson could Assistance real-time weather data fetching based on user input "} link={"https://pugaleeshwaran.github.io/Weather-Chat-bot-deployment-/"} />
            
        </div>
    )
}
export default Allproject