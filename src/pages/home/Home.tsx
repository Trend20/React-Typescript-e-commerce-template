import Hero from "./Hero";
import './Home.css';
import Brands from "./Brands";
const Home = () =>{
    return(
        <div className='home'>
            <Hero />
            <Brands />
        </div>
    )
}

export default  Home;