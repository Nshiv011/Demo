import React from "react";
import Login from "./Form";
import Head from "./Header";
import {Route,Switch} from "react-router";
// import Cards from "./Cards";
import Cardss from "./Cardss";
import Car from "./Car";
import Useeffect from "./Useeffect";

const Rout=()=>{
        return(
                <>
<Switch>
<Route exact path="/" component={Head}/>
<Route exact path="/card" component={Cardss}/>
<Route exact path="/useeffect" component={Useeffect}/>
</Switch>

                </>
        )
}

export default Rout;