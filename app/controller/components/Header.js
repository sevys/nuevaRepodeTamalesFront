import React from 'react';
import   '../../view/assets/css/Header.css';
import {Link} from 'react-router-dom';



class Header extends  React.Component{
    constructor(props) {
        super(props);
        }

    render() {
        return(
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <a className="navbar-brand" href="app/controller/components/Header#">LOGO</a>

                                <ul className="nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="app/controller/components/Header#">Inicio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="app/controller/components/Header#">Productos</a>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Mapa">
                                            <a className="nav-link " href="app/controller/components/Header#">Ubicación</a>
                                        </Link>

                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Pedidos">
                                            <a className="nav-link " href="app/controller/components/Header#">Pedidos</a>
                                        </Link>
                                    </li>

                                </ul>
                    </nav>

                    <div className="cover d-flex justify-content-center align-items-center flex-column">
                        <h1>Tamales FC</h1>
                        <p className="header-p">Los mejores tamales de la ciudad</p>
                        <button className="btn btn-primary">conoce más</button>
                    </div>


                </header>
            </div>
        )
    }

}
export default Header;