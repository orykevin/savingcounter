import logo from "../img/money.svg";
import ham from "../img/ham.svg";

const Header = ({setDis}) => {
    return (
        <div className="header"> 
            <img className="logo" src={logo} alt="logo"/>
            <img onClick={()=>{setDis(true);document.body.classList.add('body-over')}} className="ham" src={ham} alt="ham"/>
        </div>
    )
}

export default Header
