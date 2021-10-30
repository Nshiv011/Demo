import React from "react";
import Hello from "./App";
import Cards from "./Cards";
import data from "./Data.jsx";
import Cardss from "./Cardss";
import Navbar from "./Navbar";
import Carousal from "./Carousal";

function Head(){
        return(
                <>
<Navbar/>
<Cardss/>   
<Carousal/>    
                </>
        );
};
export default Head;



