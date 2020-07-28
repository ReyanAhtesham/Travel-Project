import React,{useState,useEffect} from "react"
import M from "materialize-css";
import 'materialize-css';

const Planes=({plan}) => {
  useEffect(() => {
    M.AutoInit();
},[])
    return (
       <div> 
        <ul class="collapsible">
 <li>
   <div class="collapsible-header teal z-depth-5"><i class="material-icons">
     </i>
     <div>
     <h1>
        Day {plan.date.substring(9,10)}
       </h1>
       </div></div>
   <div class="collapsible-body"><div>
   {plan.itinerary_items.map(item => (
           <div className="row">
             <div className="col s6">
               {(item.title)? 
           <h3>Time:{item.title}</h3>:
           <div></div>
           }
           <div style={{paddingTop:"20px"}}></div>
           <h3>Description</h3>
           <h5>{item.description}</h5>
     <div className="divider">
</div>
         </div>
         {(item.poi.images[0]) ?
         <div className="col s6">
           <h5>Name:{item.poi.name}</h5>
            <img src={item.poi.images[0].source_url} alt="" style={{width:"80%",height:'60%'}} />
            <h6>{item.poi.snippet}</h6>
            </div> 
            :
            <div>
        <h5>Name:{item.poi.name}</h5>
            <div style={{width:"500px",height:'300px'}} >
              </div> 
              </div>}
           </div>
         ))}   
     </div>
     </div>
 </li>
</ul>
       </div>     
          
           
    
    )
}
    
export default Planes