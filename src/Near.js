import React from "react"
import Slider from "react-slick";
import "./App.css";

const Near=({point}) => {
    

    return (
<div>
    
        <div className="row gaul">
            <div className="">
               <div className="card" >
                   <div className="card-image">
                   {(point.images[0]) ?
                          <img className=""src={point.images[0].source_url} 
                          style={{width:"200px",height:"270px"}}/>:
                          <div 
                          style={{width:"200px",height:'270px'}} > 
                          </div>}
                        <span className="card-title">{point.name.substring(0,25)}</span>
                   </div>
               </div>
            </div>
            </div>
              </div>
    ) 
}
    
export default Near