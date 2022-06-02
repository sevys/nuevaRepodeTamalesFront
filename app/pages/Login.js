import React from 'react';
import update from 'immutability-helper';
import '../assets/css/Login.css';
import APIInvoker from "../utils/APIInvoker";
import vector from "../assets/img/vector.svg";

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
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
        <section>
            <div className="container justify-content-center align-items-center mt-5 mb-5">
                <div className="login-container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-sm-6 col-lg-5 mt-4 mb-4">
                            <div className=" container_left ">
                                <h5>Entra con su cuenta de administrador</h5>
                                <div className="mt-4">
                                    <span >Usuario</span>
                                    <input className="input" type="email"
                                           name="email"
                                           id="email"
                                           placeholder="Example@email.com"
                                           value={this.state.email}
                                           onChange={this.changeField.bind(this)}/>
                                </div>
                                <div className="mt-4">
                                    <span>Contraseña</span>
                                    <input type="password"
                                           name="password"
                                           id="password"
                                           placeholder="1234"
                                           value={this.state.password}
                                           onChange={this.changeField.bind(this)} />
                                </div>
                                <div className='label-error' ref={self => this.message =self}> </div>
                                <button className=" button_login btn btn-primary mt-5" type="submit" onClick={this.logIn.bind(this)}>Iniciar sesión</button>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-5 mt-4 mb-4">
                            <div className="container_rith">
                                <h5>Tamales <p>FC</p></h5>
                                <div className="logo mt-5 mb-5">

                                </div>
                                <h5>Bievenido eres el admi</h5>
                                <p>esta empresa es tuyo,
                                    solo tu tienes el control</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
        )


    }

    logIn(e){
        let datos= {
            user: this.state.email,
            password: this.state.password
        }

        APIInvoker.invokePOST(`/users/userValidate`,datos,
            data => {
                this.goTo()

            },
            error =>{
                this.message.innerHTML = "Contraseña o Usuario Incorrecto"
                e.preventDefault()
                document.getElementById('email').value = '';
                document.getElementById('password').value = '';
                this.state.email = null
                this.state.password = null
            }
        )

    }

    goTo(){
        return this.props.history.push('/Pedidos');
    };


}
export default Login;