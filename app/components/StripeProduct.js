import React from 'react';
import '../assets/css/product.css';
import chipilin from '../assets/img/chipilin.jpg';
import mole from '../assets/img/mole.jpg';
import bola from '../assets/img/bola.jpg';
import cambray from '../assets/img/cambray.jpg';
import porconf from '../assets/img/porconf.png';
import porconfig1 from '../assets/img/porconf1.jpg';
import {Link, Redirect} from "react-router-dom";

class StripeProduct extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <>
                <div className="container mt-5 mb-5">
                    <div className="product-stripe">
                        <div className="stripe-container">
                            <div className="card bien" >
                                <Link to={{
                                  pathname:"/ProductDetails",
                                  state:{img: chipilin,
                                  nombrec:'Chipilin'}
                                }}>
                                <img src={chipilin} className="card-img-top" alt="es una fabrica de tamales" style={{height: 200}}/>
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">Chipilin</h5>
                                    <span className="badge bg-info text-dark">$15MX</span>
                                </div>
                            </div>
                            <div className="card" >
                                <Link to={{
                                    pathname:'/ProductDetails',
                                    state:{img:bola,
                                    nombrec:'Bola'}
                                }}>
                                <img src={bola} className="card-img-top" alt="es una fabrica de tamales" style={{height: 200}}/>
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">Bola</h5>
                                    <span className="badge bg-info text-dark">$15MX</span>
                                </div>
                            </div>
                            <div className="card" >
                                <Link to={{
                                    pathname:'/ProductDetails',
                                    state:{
                                        img:mole,
                                        nombrec:'Mole'
                                    }
                                }}>
                                    <img src={mole} className="card-img-top" alt="es una fabrica de tamales" style={{height: 200}}/>
                                </Link>
                                    <div className="card-body">
                                        <h5 className="card-title">Mole</h5>
                                        <span className="badge bg-info text-dark">$15MX</span>
                                    </div>
                            </div>
                            <div className="card" >
                                <Link to={{
                                    pathname:'/ProductDetails',
                                    state:{
                                        img:cambray,
                                        nombrec:'Cambray'
                                    }
                                }}>
                                <img src={cambray} className="card-img-top" alt="es una fabrica de tamales" style={{height: 200}}/>
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">Cambray</h5>
                                    <span className="badge bg-info text-dark">$15MX</span>
                                </div>
                            </div>
                            <div className="card" >
                                <img src={porconf} className="card-img-top" alt="es una fabrica de tamales" style={{height: 200}}/>

                                <div className="card-body">
                                    <h5 className="card-title">Por asignar</h5>
                                    <span className="badge bg-info text-dark">$15MX</span>
                                </div>
                            </div>
                            <div className="card" >
                                <img src={porconfig1} className="card-img-top" alt="es una fabrica de tamales" style={{height: 200}}/>

                                <div className="card-body">
                                    <h5 className="card-title">Por poner</h5>
                                    <span className="badge bg-info text-dark">$15MX</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default StripeProduct;
