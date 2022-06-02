import React from 'react';
import local from '../assets/img/local.jpg';
import fabrica from '../assets/img/fabrica.jpeg';
import receta from '../assets/img/receta.jpg';
import vector from '../assets/img/vector.svg';
import '../assets/css/objetoCard.css';
import * as url from "url";


class ObjetivoCard extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <section>
                    <div className="container mt-5 mb-5">
                        <div className="row justify-content-center">
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-2">
                                <div className="card" >
                                    <img src={local} className="card-img-top" alt="es un local de tamales" style={{height: 200}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Empresa local</h5>
                                        <p className="card-text">Trabajamos con personal
                                            responsable nuestra principal prioridad es la higiene en la elaboracion de nuestros productos.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-2">
                                <div className="card" >
                                    <img src={fabrica} className="card-img-top" alt="es una fabrica de tamales" style={{height: 200}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Comercio justo</h5>
                                        <p className="card-text">Adquirir nuestros productos nos ayuda a nosotros como empresa,
                                            y a nuestros trabajadores, para que sigamos manteniendo
                                            nuestra mejor calidad.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-2">
                                <div className="card" >
                                    <img src={receta} className="card-img-top" alt="es una fabrica de tamales" style={{height: 200}}/>

                                    <div className="card-body">
                                        <h5 className="card-title">Pasión por el tamal</h5>
                                        <p className="card-text">Nos apacionada nuestro trabajo por eso ofrecemos los mejores
                                            tamales de la ciudad, la mejor calidad.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section>
                    <div className="container mt-5 mb-5">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-lg-5">
                                    <img src={vector} alt="es una persona ilustrstada que muestra un corazon el en pecho"/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <h3>¡Alegra tu dia comiendo tamales!</h3>
                                    <p className="card-p">Ordena tus tamales y llega a buscarlo en el lugar de entrega,
                                        o si no busca el local fisico de TamalesFc para realizar su compra</p>
                                    <a className="link_mapa" href="#">ver mapa</a>
                                </div>
                            </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default ObjetivoCard;