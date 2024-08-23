import { useState } from "react";
import Search from "../search/Search";

export default function Header() {
    const [isActive, setIsActive] = useState(false);

    const update = [isActive, setIsActive];
    const searchClickHandler = () => {
        setIsActive(true);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="header__logo">
                            <a href="/">
                                <img src="img/logo.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="header__nav">
                            <nav className="header__menu mobile-menu">
                                <ul>
                                    <li className="active">
                                        <a href="/">Homepage</a>
                                    </li>
                                    <li>
                                        <a href="/catalog">
                                            Menu
                                            <span className="arrow_carrot-down" />
                                        </a>
                                        <ul className="dropdown">
                                            <li>
                                                <a href="/details">Details</a>
                                            </li>
                                            <li>
                                                <a href="/catalog">Catalog</a>
                                            </li>

                                            <li>
                                                <a href="/blog">Blog Details</a>
                                            </li>
                                            <li>
                                                <a href="/register">Sign Up</a>
                                            </li>
                                            <li>
                                                <a href="/login">Login</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/blog">Blog</a>
                                    </li>
                                    <li>
                                        <a href="/create">Create</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="header__right">
                            <a
                                // href="/search"
                                className="search-switch"
                                onClick={searchClickHandler}
                            >
                                <span className="icon_search" />
                            </a>
                            <a href="/login">
                                <span className="icon_profile" />
                            </a>
                        </div>
                    </div>
                </div>
                <div id="mobile-menu-wrap" />
            </div>

            <Search update={update} />
        </header>
    );
}
