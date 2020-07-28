import React from "react";
import Slider from "react-slick";
import 'materialize-css';
import "./App.css";
import M from "materialize-css";


const Pictures=({owner,caption}) => {
    return (   

           <div className="row gaul">
            <div className="">
               <div className="card" >
                   <div className="card-image">
                          <img className=""src={owner} style={{width:"200px",height:"270px"}}/>
                        <span className="card-title">{caption.substring(0,25)}</span>
                   </div>
               </div>
            </div>
            </div>
    )
} 

export default Pictures