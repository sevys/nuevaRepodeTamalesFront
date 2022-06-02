import React from "react";

import Header from "../../controller/components/Header";
import ObjetivoCard from "../../controller/components/objetivoCard";
import StripeProduct from "../../controller/components/StripeProduct";
import Maps from '../../controller/components/Maps';
import Footer from "../../controller/components/Footer";

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