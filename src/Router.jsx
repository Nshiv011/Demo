import React from "react";
import Login from "./Form";
import Head from "./Header";
import {Route,Switch} from "react-router";
// import Cards from "./Cards";
import Cardss from "./Cardss";
import Car from "./Car";

const Rout=()=>{
        return(
                <>
<Switch>
<Route exact path="/" component={Head}/>
<Route exact path="/card" component={Cardss}/>
{/* <Route exact path="/car" component={Car}/> */}
</Switch>

                </>
        )
}

export default Rout;