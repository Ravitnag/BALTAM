import { FaHeart } from "react-icons/fa";
import './OneBaltamBar.css';

const OneBaltamBar = () => {

    return (
        <div className="one-baltam-bar">
            <div className="likes">
                <span>1</span>
                <FaHeart className="like-icon"/>
            </div>
        </div>
    )
}

export default OneBaltamBar