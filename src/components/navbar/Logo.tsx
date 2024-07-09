import {Link} from "react-router-dom";

const Logo = () =>{
    return(
        <Link to={'/'} className="flex">
            <img src="/logo1.svg" alt="logo" className="w-10"/>
        </Link>
    )
}

export default Logo;