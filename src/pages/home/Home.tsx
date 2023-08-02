import Hero from "./Hero";
import './Home.css';
import Brands from "./Brands";
import PopularProducts from "./PopularProducts";
import Deals from "./Deals";
const Home = ():JSX.Element =>{
    return(
        <div className='home'>
            <Hero />
            <Brands />
            <PopularProducts />
            <Deals />
        </div>
    )
}

export default  Home;