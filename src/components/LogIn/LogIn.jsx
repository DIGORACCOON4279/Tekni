import CreateAccount from "../CreateAccount/CreateAccount";
import "./LogIn.css";

const LoginForm = () => {
    return (

        <section className="logInSection">

            {/* <input id="user" type="checkbox"/> */}
            <label htmlFor="user">
                <img className="closeMenu" src="/img/close.svg" alt=""/>
            </label>

            <form>
                <label>
                    Email:
                    <input className="logInPut" type="email" value="" onChange="" required />
                </label>
                <br />
                <label>
                    Password:
                    <input className="logInPut" type="password" value="" onChange="" required />
                </label>
                <br />
                <button type="submit">Iniciar sesión</button>

                <input id="createAccountClick" type="checkbox"/>
                <label htmlFor="createAccountClick">
                    <p className="clickSignUp">Create Account</p>
                </label>
                <CreateAccount/>
            </form>
        </section>
    );
};

export default LoginForm;





