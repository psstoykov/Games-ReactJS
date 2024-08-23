export default function CreateGame() {
    return (
        <section className="signup spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="login__form">
                            <h3>Create Game</h3>
                            {/* TODO work on the form */}
                            <form action="#">
                                <div className="input__item">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="input__item">
                                    <input
                                        type="text"
                                        name="description"
                                        placeholder="Description"
                                    />
                                </div>
                                <div className="input__item">
                                    <input
                                        type="text"
                                        name="studios"
                                        placeholder="Studios"
                                    />
                                </div>
                                <div className="input__item">
                                    <input
                                        type="text"
                                        name="image"
                                        placeholder="imageURL"
                                    />
                                </div>
                                <div className="input__item">
                                    <input
                                        type="text"
                                        name="publisher"
                                        placeholder="Publisher"
                                    />
                                </div>
                                <div className="input__item">
                                    <input
                                        type="text"
                                        name="genre"
                                        placeholder="Genre"
                                    />
                                </div>
                                <div className="input__item">
                                    <input
                                        type="text"
                                        name="released"
                                        placeholder="Data Released"
                                    />
                                </div>

                                <button type="submit" className="site-btn">
                                    Create
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
