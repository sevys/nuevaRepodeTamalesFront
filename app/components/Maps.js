import React from 'react';
import '../assets/css/maps.css';

class Maps extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <>
                <section>
                    <div className="container mt-5 mb-5" id="mapa">
                        <h4>Aqui nos vemos para la entrega de tu producto</h4>
                        <p className="location">Xamaipak, 29060 Tuxtla Gutiérrez, Chis.</p>
                        <div className="maps">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.454961962838!2d-93.13333898582115!3d16.754025525173194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd9187c4a577d%3A0xee6f0d885bfc6aaf!2sMonumento%20al%20Rey%20Pakal%20%5BCabeza%20Maya%5D!5e0!3m2!1ses!2smx!4v1635971860781!5m2!1ses!2smx"
                                width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </section>
            </>
        )
    }

}
export default Maps;