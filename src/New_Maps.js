import React, { useState } from "react";
import ReactDOM from "react-dom";
import HPlatform, { HMap, HMapPolyLine } from "react-here-map";
import { render } from "@testing-library/react";

const New_Maps = ({dests}) => {


const points = [
 { lat: 52.5309825, lng: 13.3845921 },
  { lat: 52.5311923, lng: 13.3853495 },
  { lat: 52.5313532, lng: 13.3861756 },
  { lat: 52.5315142, lng: 13.3872163 },
  { lat: 52.5316215, lng: 13.3885574 },
  { lat: 52.5320399, lng: 13.3925807 },
  {lat: 52.5321472, lng: 13.3935785 },
  
];


 return(
   <div>
    <ol>
     {dests.map(dest => (
       <li key={dest.latitude}>
        setLat({dest.latitude})
        setLng({dest.longitude})
        </li>
      ))}
     </ol>
   <div>
 <HPlatform
    apikey={"bFMkt1xfwCWsW6JaDqaLHfSxOF3_hV4YM-ZU1xXeQHw"}
    useCIT
    useHTTPS
    includeUI
    includePlaces
  >
    <HMap
      style={{
        height: "400px",
        width: "800px",
      }}
      mapOptions={{ center: { lat: 52.5321472, lng: 13.3935785 }, zoom: 10 }}
    >
      <HMapPolyLine points={points} />
    </HMap>
  </HPlatform>
  </div>
  </div>
)}

export default New_Maps



/* app_id="YOUR_APP_ID"
document.getElementById("app")
app_code="YOUR_APP_CODE"*/