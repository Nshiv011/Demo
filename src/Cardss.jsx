import React from "react";
import Cards from "./Cards";
import data from "./Data";

function Alldata(value){
        return(
                <>
 <Cards
        title={value.title}
        desc={value.desc}
        img={value.img}
        button={value.button}
                                /> 

                </>
        );
};

const Cardss=(props)=>{
        console.log()
        return(
                <>
                <div className="container">
                        <div className="row">
{data.map(Alldata)}
                        </div>
                </div>
                </>
        )
}

export default Cardss;