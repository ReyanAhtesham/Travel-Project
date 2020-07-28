import React,{useState,useEffect} from "react"
import M from "materialize-css";
import 'materialize-css';

const Col=() => {
  useEffect(() => {
    M.AutoInit();
},[])
    return (
       <div> 
     <div>
        <ul class="collapsible">
 <li>
   <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
   <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
 </li>
 <li>
   <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
   <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
 </li>
 <li>
   <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
   <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
 </li>
</ul>
       </div>     
          
           
    </div>
    )
}
    
export default Col