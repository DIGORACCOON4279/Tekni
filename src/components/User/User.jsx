import "./User.css";

const User = () => {
    return (
        <li>
            <label htmlFor="user">
                <img className="userIcon" src="./img/user.svg" alt=""/>
                <input id="user" type="checkbox"/>
            </label>
        </li>
    )
}

export default User
