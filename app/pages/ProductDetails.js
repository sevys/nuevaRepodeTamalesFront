import React from 'react';
import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import '../assets/css/ProductDetails.css';

class ProductDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            como:this.props.location.state.img,
            nombreProduct:this.props.location.state.nombrec,
            cantidad:''
        }
    }
    changeField=(e)=>{
        this.setState({
            cantidad: e.target.value
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
                <div className=" bg-light">
                    <div className="container ">
                        <div className="row">
                            <div className="col">
                                <h6>
                                    Compra el producto
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
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">

                                <br/>
                                <div className="border border-1">
                                    <h6>Entrega Gratis</h6>
                                    <hr/>
                                    <h6> Servicio 25/7</h6>
                                    <hr/>
                                    <h6>  Oferta</h6>
                                    <hr/>
                                    <h6>12 MSI</h6>
                                    <hr/>
                                    <h6>  Pagos en Efectivo</h6>
                                </div>
                            </div>
                            <div className="col-lg-5" >
                                <img src={this.state.como} className="card-img-top" alt="es una imagen de un tamal" style={{height: 300}}/>
                            </div>
                            <div className="col-lg-4">
                                <h6 className="fw-bold text-black">{this.state.nombreProduct}</h6>
                                <p>$15MX</p>
                                <br/>
                                <div className="btn-group">
                                    <label className="label_cantidad" >Cantidad</label>
                                    <input className="input" type="number"
                                           name="number"
                                           value={this.state.cantidad}
                                           onChange={this.changeField.bind(this)}
                                    />
                                    <label ref={self=> this.cantidad = self}></label>
                                </div>
                                <br/>
                                <br/>
                                <button type="button" className="btn btn-dark" id="buttons-align" >Añadir al carrito</button>
                                <Link className=" text-white text-center " to={{
                                    pathname:'/Comprar',
                                    state:{
                                        nombreProducto:this.state.nombreProduct,
                                        canti:this.state.cantidad
                                    }
                                    }} >
                                    <button type="button" className="btn btn-dark"  id="buttons-align" >Comprar</button>
                                </Link>
                                <br/>
                                <br/>
                                <p>Detalles del producto</p>
                                <p>este producto es 100% chiapaneco, echo por
                                la gente de este hermoso pueblo con mucho amor</p>
                            </div>
                        </div>
                    </div>
                </section>
                <br/>
                <Footer/>
            </div>
        )
    }

    // comprar(){
    //
    //     if (this.state.cantidad === 0){
    //         this.nombre.innerHTML = 'Agregue un cantidad Valida'
    //     }else {
    //
    //     }
    // }

}
export default ProductDetails;