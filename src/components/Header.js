import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header=()=>{
console.log("hyy")

return<div className="headerContainer">
    <div className="imgBox">
        <img className="img" src="https://th.bing.com/th?id=OIP.Vy5PUdCk1nZpeE31MCa1pwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=3.1&rm=2" alt="logo"/>
    </div>
    <div className="nav">
        <ul>
            <li>< Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>


</div>
}
export default Header;