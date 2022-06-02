import React from 'react';
import {Link} from "react-router-dom";
import '../assets/css/Compra.css'
import update from "immutability-helper";
import APIInvoker from "../utils/APIInvoker";



class Comprar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            nombre: '',
            apellidos: '',
            telefono: '',
            nombrePro:this.props.location.state.nombreProducto,
            cantidad:this.props.location.state.canti,
            pagar: ''
        }

    }


    changeField(e){
        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }


    render(){
        return(
            <>
                <div className="container compra">
                    <div className="row justify-content-md-center ">
                        <div className="col-lg-5" >
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <span >Nombre (s)</span>
                                    <input className="form-control" type="text"
                                           name="nombre"
                                           id="name"
                                           placeholder="Jose Luis"
                                           value={this.state.nombre}
                                           onChange={this.changeField.bind(this)}
                                    />
                                    <label ref={self=> this.nombre = self}></label>
                                </div>
                                <div className="col-md-6">
                                    <span >Apellidos</span>
                                    <input className="form-control" type="text"
                                           name="apellidos"
                                           id="lastname"
                                           placeholder="Jimenez Alvarado"
                                           value={this.state.apellidos}
                                           onChange={this.changeField.bind(this)}
                                    />
                                    <label ref={self=> this.apellidos = self}></label>
                                </div>
                                <div className="col-12">
                                    <span >Telefono</span>
                                    <input className="form-control" type="text"
                                           name="telefono"
                                           id="phone"
                                           placeholder="45623543423"
                                           value={this.state.telefono}
                                           onChange={this.changeField.bind(this)}
                                    />
                                    <label ref={self=> this.telefono = self}></label>
                                </div>
                            </form>
                            <div ref={self => this.messageError = self}></div>
                        </div>

                        <div className="col-lg-4">
                            <h6 className="fw-bold text-black">{this.state.nombrePro}</h6>
                            <p>$15MX</p>
                            <br/>
                            <div className="btn-group">
                                <label className="label_cantidad" >Cantidad  </label>
                                <label>{this.state.cantidad}</label>
                            </div>
                            <br/>
                            <div className="btn-group">
                                <label className="label_cantidad" >Total a pagar   </label>
                                <label> {this.state.pagar = this.state.cantidad*15} </label>
                            </div>
                            <br/>
                            <br/>
                            {/*<Link to="/Modal">*/}
                                <button type="button" className="btn btn-dark" id="buttons-align" onClick={this.guardar.bind(this)} >TerminarCompra</button>
                            {/*</Link>*/}
                            <Link className=" text-white text-center " to="/" >
                                <button type="button" className="btn btn-dark"  id="buttons-align">Cancelar</button>
                            </Link>
                            <br/>
                            <br/>
                            <p>Detalles del producto</p>
                            <p>este producto es 100% chiapaneco, echo por
                                la gente de este hermoso pueblo con mucho amor</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    guardar(e){

        this.messageError.innerHTML =''
        this.validarCampos()

        if (this.status){
            let datos = {
                Nombre: this.state.nombre,
                Apellidos: this.state.apellidos,
                Telefono: this.state.telefono,
                Producto: this.state.nombrePro,
                Cantidad: this.state.cantidad,
                totalPagar: this.state.pagar
            }

            APIInvoker.invokePOST(`/pedidos/registrarPedido`, datos, data =>{
                //alert(data.message)
                //alert(JSON.stringify(data))
            }, error =>{
                alert(error.message + error.error)
            })
            this.goTo()
        }else {
            this.messageError.innerHTML = ''
        }
        //e.preventDefault()

    }

    goTo(){
        return this.props.history.push('/Modal');
    };

    validarCampos(){
        let estado = true;

        if (this.state.nombre.length === 0) {
            this.nombre.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.nombre.innerHTML = ''

        if (this.state.apellidos.length === 0) {
            this.apellidos.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.apellidos.innerHTML = ''

        if (this.state.telefono.length === 0) {
            this.telefono.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.telefono.innerHTML = ''


        if (estado === false)
            this.status = false
        else
            this.status = true
    }
}
export default Comprar;