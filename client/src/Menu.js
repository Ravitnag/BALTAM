import './css/Menu.css'
import { MdDirectionsRailway } from "react-icons/md";
import { MdLocalParking } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { GiMicrophone } from "react-icons/gi";
import { FaUserClock } from "react-icons/fa";
import { useState } from 'react';
import { Link, Outlet } from "react-router-dom";



const Menu = () => {

    const [mini, setMini] = useState(true)

    const toggleSidebar = (action) => {
        if (mini && action === "over") {
            document.getElementById("baltams-menu").style.width = "150px";
            document.getElementById("main").style.marginRight = "150px";
            document.getElementById("footer").style.marginRight = "150px";
            setMini(false)
        } else if (!mini && action === "out") {
            document.getElementById("baltams-menu").style.width = "50px";
            document.getElementById("main").style.marginRight = "50px";
            document.getElementById("footer").style.marginRight = "50px";
            setMini(true)
        }
    }


    return (
        <div>
            

            <div id="baltams-menu" className='baltams-menu' onMouseOver={() => toggleSidebar("over")} onMouseLeave={() => toggleSidebar("out")}>
            <Link to="/"><MdHome className='menu-icon' /> בית</Link>
                <Link to="/railsBaltams"><MdDirectionsRailway className='menu-icon' /> ברכבות</Link>
                <Link to="/parkingBaltams"> <MdLocalParking className='menu-icon' /> בחניה</Link>
                <Link to="/LinesBaltams"> <FaUserClock className='menu-icon' /> בתורים</Link>
                <Link  to="/ShowsBaltams"> <GiMicrophone className='menu-icon' /> במופעים</Link>

            </div>

        </div>
    )
}


export default Menu