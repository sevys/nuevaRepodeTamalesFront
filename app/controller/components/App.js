import React from 'react'
import Home from "../../view/pages/Home";
import Login from "../../view/pages/Login";
import ProductDetails from "../../view/pages/ProductDetails";
import Pedidos from '../../view/pages/Pedidos';
import Maps from './Maps';
import Comprar from './Comprar';
import Modal from "./Modal";
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
