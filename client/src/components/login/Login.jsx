import { useNavigate } from "react-router-dom";
import { useState } from "react";

const initialValues = { email: "", password: "" };

export default function Login() {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const login = async () => {
            const request = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
            const response = await request.json();
            console.log(response);
        };

        login();
        setValues(initialValues);
    };
    return (
        <>
            <section
                className="normal-breadcrumb set-bg"
                data-setbg="img/normal-breadcrumb.jpg"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="normal__breadcrumb__text">
                                <h2>Login</h2>
                                <p>Welcome to the official Anime&nbsp;blog.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="login spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login__form">
                                <h3>Login</h3>
                                <form onSubmit={submitHandler}>
                                    <div className="input__item">
                                        <input
                                            name="email"
                                            type="text"
                                            value={values.email}
                                            onChange={changeHandler}
                                            placeholder="Email address"
                                        />
                                        <span className="icon_mail" />
                                    </div>
                                    <div className="input__item">
                                        <input
                                            name="password"
                                            type="password"
                                            value={values.password}
                                            onChange={changeHandler}
                                            placeholder="Password"
                                        />
                                        <span className="icon_lock" />
                                    </div>
                                    <button type="submit" className="site-btn">
                                        Login Now
                                    </button>
                                </form>
                                <a href="#" className="forget_pass">
                                    Forgot Your Password?
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login__register">
                                <h3>Dont’t Have An Account?</h3>
                                <a href="/register" className="primary-btn">
                                    Register Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="login__social">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6">
                                <div className="login__social__links"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
