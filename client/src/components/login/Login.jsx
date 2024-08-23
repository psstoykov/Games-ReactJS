export default function Login() {
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
