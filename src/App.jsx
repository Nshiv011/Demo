import React, { Component } from "react";
import aman from "./Image/1.jpg";

const Hello=()=>{
        return(
                <>
<h1 className="heading1">Hello World </h1>
<img src={aman} className="img"/>

                </>
        );
};


const Hello1=()=>{
        return(
                <>
<h1 className="heading1">Hello World 1 </h1>
<img src={aman} className="img"/>

                </>
        );
};

const Hello2=()=>{
        return(
                <>
<h1 className="heading1">Hello World 2 </h1>
<img src={aman} className="img"/>

                </>
        );
};


export default Hello;
export {Hello1,Hello2};



// jsx are the Component of JAVASCRIPT








