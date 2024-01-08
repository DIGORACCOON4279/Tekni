// import LoginForm from "../LogIn/LogIn";
import "./CreateAccount.css";

const SignUpForm = () => {
    return (
        <section className="signUpSection">
            <label htmlFor="createAccountClick">
                <img className="closeMenu" src="./img/close.svg" alt=""/>
            </label>
            <form className="signUpForm" onSubmit="">
                <label>
                    Name:
                    <input
                    type="text"
                    value="firstName"
                    onChange=""
                    className="signUpInput"
                    required
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                    type="text"
                    value="lastName"
                    onChange=""
                    className="signUpInput"
                    required
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                    type="email"
                    value=""
                    onChange=""
                    className="signUpInput"
                    required
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                    type="password"
                    value="password"
                    onChange=""
                    className="signUpInput"
                    required
                    />
                </label>
                <br />
                <button type="submit" className="signUpButton">
                    Create Account
                </button>

                {/* <label htmlFor="user">
                    <p className="clickLogIn">Log In</p>
                </label>
                <input id="user" type="checkbox"/>
                <LoginForm/> */}

            </form>
        </section>
    );
};

export default SignUpForm;

