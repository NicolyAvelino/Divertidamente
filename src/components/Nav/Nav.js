import React from "react"

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light cor static-top header-a">
            <div className="container nav-container">
                <a className="navbar-brand brand" href="#">Emotions ❤</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse alink" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Hoy!
        </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li> */}

                        <li className="nav-item active">
                            <a className="nav-link" href="#alegria">Alegria</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#medo">Medo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#confusao">Confusão</a>
                        </li>
                    </ul>


                </div>


            </div>
        </nav>
    );
}

export default Nav;