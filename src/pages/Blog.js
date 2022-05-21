import React from "react";
import { useNavigate } from "react-router-dom";

function Blog(){
    let gohome = useNavigate();
    return(
       <div className="text-center mt-5">
           <h3>Blog Page</h3><br />
           <p>I am from blog page.</p><br />
           <button onClick={()=>gohome('/')} className='btn btn-primary'>Go Home</button>
       </div>
    ) 
}

export default Blog