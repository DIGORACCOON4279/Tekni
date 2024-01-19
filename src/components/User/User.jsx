import LogIn from "../LogIn/LogIn";
import "./User.css";

const User = () => {
    return (
        <li>
            <label htmlFor="user">
                <img className="userIcon" src="../img/user.svg" alt=""/>
            </label>
            <input id="user" type="checkbox"/>
            <LogIn/>
        </li>
    )
}

export default User
