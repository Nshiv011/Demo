import React from "react";
import Cards from "./Cards";
import data from "./Data";
const Cardss=(props)=>{
        console.log()
        return(
                <>
                <div className="container">
                        <div className="row">
                                <div className="col-sm-4">
<Cards
          title={data[0].title}
        desc={data[0].desc}
        img={data[0].img.i1}
        button={data[0].button}
/>
                                </div>
                                <div className="col-sm-4">
                                <Cards
        title={data[1].title}
        desc={data[1].desc}
        img={data[1].img}
        button={data[1].button}
                                />                           
                                </div>
                                <div className="col-sm-4">
                                <Cards
        title={data[2].title}
        desc={data[2].desc}
        img={data[2].img}
        button={data[2].button}
                                />                        
                                </div>
                        </div>
                </div>
                </>
        )
}

export default Cardss;