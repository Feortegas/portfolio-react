import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg px-2">
            <a className="navbar-brand" href="/">
                <span>Fernando Ortega</span>
            </a>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto align-items-center">
                    <li className="nav-item">
                        <span className="nav-link" href="/about">About me</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" href="/projects">Projects</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" href="/contact">Contact</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" href="/contact">Resume</span>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;