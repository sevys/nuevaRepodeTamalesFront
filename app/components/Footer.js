import React from 'react';
import '../assets/css/footer.css';

class Foteer extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <>
                <footer className="text-center footer-style">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-4 footer-col">
                                <h5>Dirección</h5>
                                <p>
                                    Xamaipak, 29060 Tuxtla Gutiérrez, Chis. <br/>
                                    cabeza maya
                                </p>
                            </div>
                            <div className="col-md-4 footer-col">
                                <h5>Mis redes</h5>
                                <ul className="list-inline">
                                    <li>
                                        <a target="_blank" href="#" className="btn-social btn-outline">Facebook<i
                                            className="fa fa-fw fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="#" className="btn-social btn-outline">Email<i
                                            className="fa fa-fw fa-google-plus"></i></a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="#" className="btn-social btn-outline">Twitter<i
                                            className="fa fa-fw fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="#" className="btn-social btn-outline">Linkedin<i
                                            className="fa fa-fw fa-linkedin"></i></a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="#" className="btn-social btn-outline">Otro<i
                                            className="fa fa-fw fa-dribbble"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4 footer-col">
                                <h5>Nuestro trabajo</h5>
                                <p>Tenemos años de experiencia en ofrecer comida y nos apasiona!</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }

}
export default Foteer;