import React, { useEffect, useState } from "react";

const Useeffect=()=>{
       const [number,setnumber]=useState(0);
       const [num,setnum]=useState(0);
useEffect(()=>{
        alert("You have Clicked")
},[number])

        return(
                <>
<button onClick={()=>{setnumber(number+1)}}>Click Here {number}</button>
<button onClick={()=>{setnum(num+1)}}>Click Here {num} </button>

                </>
        );
};

export default Useeffect;
