export default function Register() {
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
                                <form action="#">
                                    <div className="input__item">
                                        <input
                                            type="text"
                                            placeholder="Email address"
                                        />
                                        <span className="icon_mail" />
                                    </div>
                                    <div className="input__item">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                        />
                                        <span className="icon_profile" />
                                    </div>
                                    <div className="input__item">
                                        <input
                                            type="password"
                                            placeholder="Password"
                                        />
                                        <span className="icon_lock" />
                                    </div>
                                    <div className="input__item">
                                        <input
                                            type="password"
                                            placeholder="confirm Password"
                                        />
                                        <span className="icon_lock" />
                                    </div>
                                    <button type="submit" className="site-btn">
                                        Login Now
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
