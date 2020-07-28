import React, { useState, useEffect } from 'react';
import './App.css';
import Pictures from './Pictures';
import Col from './Col';
import Places from "./Places"
import Near from "./Near"
import Planes from "./Planes"
import Gum from "./Gum"
import ScriptTag from 'react-script-tag';
import New_Maps from './New_Maps';
import ReactMapboxGl, { Layer, Feature,Marker,Cluster } from 'react-mapbox-gl';
import { LngLat } from 'mapbox-gl';
import { GeoJSONLayer } from "react-mapbox-gl";
import 'materialize-css';
import Slider from "react-slick";
import {Link, Router, Route, BrowserRouter } from "react-router-dom"
import { Source } from "react-mapbox-gl";
import HPlatform, { HMap, HMapPolyLine } from "react-here-map";




const Weather = () => { 

  const MAPBOX_TOKEN="pk.eyJ1IjoicmV5YW5naWxhbmkiLCJhIjoiY2tjajU0dmVoMWlhbzJ4bTJseXR2eHNwMyJ9.4MPVurBGJ8EPllQqdCrUCg"
  const also_key="lunxhzsjtnlt0jw7n30yhgebkre1hisq"
  const A_ID="ASVHPETK"
  const APP_ID="nG0YPY2EEPf0aMrGG5dv"
  const ID_KEY="bFMkt1xfwCWsW6JaDqaLHfSxOF3_hV4YM-ZU1xXeQHw"
  const ANOTHER_KEY = "8lMKyz7W8H8qwAoRhTrfcNQ4vAhhQff2"

  const key_we ="73aa259834524879bfc184102202807"
 

  
  const [query,setQuery] =useState("London");
  const [search,setSearch] =useState("");
  const [temp,setTemp] =useState({});
  const [desc, setDesc] = useState([]);
  const [icon, setIcon] =useState([]);
  const [place, setPlace] =useState([]);
  const [images, setImages] =useState([]);
  const [points, setPoints] =useState([]);
  const [walk, setWalk] =useState([]);
  const [bit, setBit] =useState("do");
  const [dests, setDests] = useState([]);
  const [lat, setLat] = useState([]);
  const [lng, setLng] = useState({lat: 51.56002507036419,lng: -0.2047743039566683});
  const [long, setLong] = useState([]);
  const [ling, setLing] = useState([]);
  const [lats, setLats] = useState([]);
  const [plans, setPlans] = useState([]);
  const [germs, setGerms] = useState([]);
  const [cls, setCls] = useState([]);
  const [run, setRun] = useState([]);
  const [latitude, setLatitude] = useState("51.517");
  const [longitude, setLongitude] = useState("-0.106");


  useEffect(() => {
   getTemp()
   getCord()
   getPoi()
   getPlan()
   getGems()
   getClose()
  // getDir()
  // getWalk()
  } ,[query,bit,lng]);


const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoicmV5YW5naWxhbmkiLCJhIjoiY2tjajU0dmVoMWlhbzJ4bTJseXR2eHNwMyJ9.4MPVurBGJ8EPllQqdCrUCg'
});

const getCord = async () => {
  const response = await fetch(
    `https://www.triposo.com/api/20200405/location.json?id=${query}&account=${A_ID}&token=${also_key}`
    );  
  const data= await response.json();
  console.log(data)
  setImages(data.results[0].images)

}

const getPoi = async () => {
  const response = await fetch(
    `https://www.triposo.com/api/20200405/poi.json?tag_labels=${bit}&location_id=${query}&count=6&order_by=-score&fields=all&account=${A_ID}&token=${also_key}`
    );
  const data= await response.json();
  console.log(data)
   setPoints(data.results)
}


const getClose = async () => {
  const response = await fetch(
   `https://www.triposo.com/api/latest/poi.json?annotate=distance:${lng.lat},${lng.lng}&location_id=${query}&tag_labels=sightseeing|null&distance=<1000&fields=all&order_by=-score&account=${A_ID}&token=${also_key}`
    );  
  const data= await response.json();
  console.log(data)
  setCls(data.results)
  }


  const getGems = async () => {
    const response = await fetch(
     `https://www.triposo.com/api/20200405/poi.json?tag_labels=character-Popular_with_locals&location_id=${query}&count=6&order_by=-score&fields=all&account=${A_ID}&token=${also_key}`
     );
    const data= await response.json();
    console.log(data)
    setGerms(data.results)
  }


  const getPlan = async () => {
    const response = await fetch(
      `https://www.triposo.com/api/latest/day_planner.json?location_id=${query}&start_date=2019-06-01&arrival_time=14:33&end_date=2019-06-04&departure_time=16:55&account=${A_ID}&token=${also_key}`   );
    const data= await response.json();
    console.log(data)
    setPlans(data.results[0].days)
   }


 const getTemp = async () => {
    const response= await fetch(
      `https://api.weatherapi.com/v1/current.json?q=${query}&key=${key_we}`
         );
    const data= await response.json();   
    console.log(data)
    setTemp(data.current)
    setIcon(data.current.condition.icon)
    setDesc(data.current.condition.text)
    setPlace(data.location)
    setLatitude(data.location.lat)
    setLongitude(data.location.lon)
   }
  
  
  const getWalk = async () => {
    const response= await fetch(
     `https://www.triposo.com/api/latest/city_walk.json?location_id=Prague&total_time=300&account=${A_ID}&token=${also_key}`
         );
    const data= await response.json();   
    console.log(data)
    setWalk(data.results[0].way_points.map(way_point=>
     way_point.coordinates.latitude
    ))
    setRun(data.results[0].way_points.map(way_point=>
      way_point.coordinates.longitude
     ))
  }
  
  const updateSearch = e => {
    setSearch(e.target.value)
    e.preventDefault()
  }

  const getSearch = e => {
    setQuery(search)
    e.preventDefault()
  }
   


    return(
    <div className="teal lighten-2 white-text">

      <div className="">    
    <form className="search-form" onSubmit={getSearch}>
     <input className="search-bar white-text" type="text" value={search} onChange={updateSearch}/>
       <button className="search-button" type="submit" >
         Search
       </button>
    </form>
    </div>

    <div className="row">
    <div className="">
    <Map
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: '100vh',
    width: '100vw'
  }}
  center={[longitude, latitude]}
>
</Map>
</div>

    <div className= "blue lighten-2 z-depth-4 stuff">
    <div className="" style={{fontSize:"30px", fontWeight:"normal"}}>
    <p className="center-align">
           {place.name},{place.country}
         </p>

         <div className="col s5" style={{fontSize:"25px", fontWeight:"normal"}}>
            <p> 
              Temperature:{temp.temp_c}
            </p>
         </div>
         
         <div className="col s5 offset-s1">
           <img src={icon} style={{width:"200px", height:"200px"}} className="icoo" />
         </div>


         <div className="col s6 left-align" style={{fontSize:"25px", fontWeight:"normal"}}>
         <p className="icount">
           Feels like:{temp.feelslike_c}
         </p>
         </div>         
         
         <div className="col s6 center-align" style={{fontSize:"20px", fontWeight:"normal"}}>
           <p className="icnt">
           {desc}
         </p >
         </div>


         </div>
     </div>
     </div>
     <div className="">
      {images.slice(0,6).map(image => (
        <Pictures
        key={image.owner_url} 
        owner={image.source_url}
        caption={image.caption}
        />
      ))}
      </div>
      
    <div  style={{paddingTop:"300px"}} >
      <h1>Choose A Category</h1>
        <div className="row" >
          <button className="col s2 waves-effect waves-light btn-small" onClick={() => setBit("do")}>do</button>
          <button className="col s2 waves-effect waves-light btn-small" onClick={() => setBit("architecture")}>architecture</button>
          <button className="col s2 waves-effect waves-light btn-small" onClick={() => setBit("nightlife")}>nightlife</button>
          <button className="col s2 waves-effect waves-light btn-small" onClick={() => setBit("hotels")}>hotels</button>
          <button className="col s2 waves-effect waves-light btn-small" onClick={() => setBit("shopping")}>shopping</button>
          <button className="col s2 waves-effect waves-light btn-small" onClick={() => setBit("museums")}>museums</button>
        </div>
      
      <div>
      {points.map(point =>(
          <Places key={point.id}
           point={point}
         />
        ))
       } </div>
      </div>
<div className="" style={{paddingTop:"300px"}}>
  <h1>Pick A Point</h1>
  <div className="">
<Map
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: '50vh',
    width: '100vw'
  }}
  onClick={(_, event) => {
   console.log(event.lngLat)
   setLng(event.lngLat)
  }}
  center={[longitude, latitude]}
  >
</Map>
</div>

</div>


 <div>
   <h1>Places Near</h1>
      {cls.slice(0,6).map(cl =>(
          <Near key={cl.id}
           point={cl}
         />
        ))
       } </div>

       
    <div style={{paddingTop:"300px"}}>
    <h1>Hidden Gems</h1>
      {germs.map(germ =>(
          <Gum key={germ.id}
           point={germ}
         />
        ))
       } </div>
       <div style={{paddingTop:"450px"}}>
         <h1>Trip Plan</h1>
    {plans.map(plan=> (
   <Planes key={plan.date}
   plan={plan} 
   />   
    ))}
</div>



    </div>
    )
  }
  
export default Weather

