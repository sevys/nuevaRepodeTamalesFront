import React from 'react';
import '../assets/css/Modal.css';

class Modal extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            modalControl:true
        }
    }
    handleControlModal(e){
        let preven =e.target.className;
        if(preven==='modal-card'){
            return;
        }
        this.setState({
            modalControl:false
        })
        this.goTo();
    }
    goTo(){
        return this.props.history.push('/');
    }

    render(){
        return(
            <>
                <div className="container">
                    <div hidden={!this.state.modalControl}>
                        <div className="modal-background" onClick={this.handleControlModal.bind(this)}>
                            <div className="modal-card">
                                    <h6>
                                        gracias por comprar con nosotros
                                        vuelva pronto!!!
                                    </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Modal;