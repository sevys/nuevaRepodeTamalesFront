import React from 'react'
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Pedidos from '../pages/Pedidos';
import Maps from '../components/Maps';
import Comprar from '../components/Comprar';
import Modal from "../components/Modal";
import {BrowserRouter, Switch, Route} from "react-router-dom";


class App extends React.Component{
    render() {
        return(
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/Login" component={Login}/>
                        <Route exact path="/ProductDetails" component={ProductDetails}/>
                        <Route exact path="/Pedidos" component={Pedidos}/>
                        <Route exact path="/Mapa" component={Maps}/>
                        <Route extact path="/Comprar" component={Comprar}/>
                        <Route extact path="/Modal" component={Modal}/>
                    </Switch>
                </BrowserRouter>

        )
    }
}



export default App;
