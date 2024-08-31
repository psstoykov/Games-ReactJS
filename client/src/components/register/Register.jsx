import { useNavigate } from "react-router-dom";
import { useState } from "react";

const initialValues = { name: "", email: "", password: "", repass: "" };

export default function Register() {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const register = async () => {
            const request = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
            const response = await request.json();
            console.log(response);
        };

        register();
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
                                <h2>Sign Up</h2>
                                <p>Welcome to the official Anime&nbsp;blog.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="signup spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login__form">
                                <h3>Sign Up</h3>
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
                                            name="name"
                                            type="text"
                                            value={values.name}
                                            onChange={changeHandler}
                                            placeholder="Your Name"
                                        />
                                        <span className="icon_profile" />
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
                                    <div className="input__item">
                                        <input
                                            name="repass"
                                            type="password"
                                            value={values.repass}
                                            onChange={changeHandler}
                                            placeholder="confirm Password"
                                        />
                                        <span className="icon_lock" />
                                    </div>
                                    <button type="submit" className="site-btn">
                                        Register
                                    </button>
                                </form>
                                <h5>
                                    Already have an account?{" "}
                                    <a href="/login">Log In!</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
