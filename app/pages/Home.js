import React from "react";

import Header from "../components/Header";
import ObjetivoCard from "../components/objetivoCard";
import StripeProduct from "../components/StripeProduct";
import Maps from '../components/Maps';
import Footer from "../components/Footer";

class Home extends React.Component{
    render() {
        return(
            <div>
                <Header/>
                <ObjetivoCard/>
                <StripeProduct/>
                <Maps/>
                <Footer/>
            </div>
        )
    }
}

export default Home;