import React,{useState,useEffect} from "react"
import M from "materialize-css";
import 'materialize-css';

const Gum=({point}) => {
    useEffect(() => {
      M.AutoInit();
  },[])
    return (
       <div> 
 <div className="row gaul">
            <div className="">
               <div className="card" style={{height:"250px"}} >
                   <div className="card-image">
                   {(point.images[0]) ?
                          <img className=""src={point.images[0].source_url} 
                          style={{width:"200px",height:"250px"}}/>:
                          <div 
                          style={{width:"200px",height:'250px'}} > 
                          </div>}
                        <span className="card-title">{point.name.substring(0,25)}</span>
                        </div>
                        <div className="card-content">
                            <p>
                                {point.snippet.substring(0,50)}
                            </p>
                        </div>
               </div>
            </div>
            </div>
    </div>
    )
}
    
export default Gum