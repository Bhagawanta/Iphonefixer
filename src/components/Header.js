import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <React.Fragment>
            <header className="main_menu">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand main_logo" href="index.html"> <img src="assets/img/logo.png" alt="logo"/> </a>
                        <a className="navbar-brand single_page_logo" href="index.html"> <img src="assets/img/footer_logo.png" alt="logo"/> </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu_icon"></span>
                        </button>

                        <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <Link to ="/" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/features" className="nav-link">features</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/pricing">pricing</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/gallery">gallery</Link>
                                </li> */}
                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="" id="navbarDropdown"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Blog
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href=""> blog</a>
                                        <a className="dropdown-item" href="">Single blog</a>
                                    </div>
                                </li> */}
                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="" id="navbarDropdown1"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        pages
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                        <a className="dropdown-item" href="">Elements</a>
                                    </div>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                       <Link > sing up </Link>
                    </nav>
                </div>
            </div>
        </div>
    </header>
        </React.Fragment>
    )
}
