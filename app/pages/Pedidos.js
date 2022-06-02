import React from 'react';
import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import bd from "../utils/APIInvoker";

class Pedidos extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            PedidosList: []

        }

        //Extraer el catálogo de roles del backend
        bd.invokeGET('/pedidos/consultar',data => {  //Entrará acá cuando status = true
            this.setState({
                PedidosList : data.data

            })
            console.log(data)
        }, error => { //Entrará acá cuando status = false
            console.log(data)
        })
    }


    render(){
        return(
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">LOGO</a>

                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Ubicación</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Pedidos</a>
                            </li>

                        </ul>
                    </nav>
                </div>
                <br/>
                <br/>
                <div className=" bg-light">
                    <div className="container ">
                        <div className="row">
                            <div className="col">
                                <h6>
                                    Lista de Pedidos 
                                </h6>
                            </div>
                            <div className="col">

                            </div>
                            <div className="col">
                                <Link className="dropdown-item" to='/'><h5>Regresar</h5></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="container">
                    <table className="table" id='tabla'>
                        <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Total a pagar</th>

                        </tr>
                        </thead>
                        <tbody>
                        {this.state.PedidosList.map((data) =>(
                            <tr key={data}>
                                <td>{data.Nombre}</td>
                                <td>{data.Apellidos}</td>
                                <td>{data.Telefono}</td>
                                <td>{data.Producto}</td>
                                <td>{data.Cantidad}</td>
                                <td>{data.totalPagar}</td>
                            </tr>

                        ))}
                        </tbody>
                    </table>
                </div>
                <Footer/>

            </div>
        )
    }


}








export default Pedidos;