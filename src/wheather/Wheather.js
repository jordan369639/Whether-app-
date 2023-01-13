import React from 'react'
import { useState,useEffect } from 'react'
import  style from "./style.css"
import Temp from './Temp';




const Wheather = () => {
const [searchvalue, setsearchvalue] = useState("guwahati");
const [temp,settemp] = useState({});


 const getwheatherinfo =  async ()=>{
let url = `https://api.openweathermap.org/data/2.5/weather?q= ${searchvalue}&units=metric&appid=76626e80d234ca2cc33cdbd7b7c1e640`

try{
    const data = await fetch(url);
    const wheatherinfo = await data.json();
const {temp,humidity,pressure} = wheatherinfo.main;
const{main:season} = wheatherinfo.weather[0];
const{name} = wheatherinfo;
const{speed} = wheatherinfo.wind;
const{country,sunrise,sunset} = wheatherinfo.sys;

const mywheatherdata = {
temp,
humidity,
pressure,
season,
name,
speed,
country,
sunset,
sunrise,

}

settemp(mywheatherdata);
 
}
catch(err){
  console.log(err);
 
}



 }
 useEffect(() => {
    getwheatherinfo()
  }, [])

  return (
       <>
       <div className="main-container">

<div className="inputfiled">
<label htmlFor="">

<input type="search" name="serach" id="input-area" 

value={searchvalue}
onChange= { (e) => setsearchvalue(e.target.value)}
placeholder="search..."


/>
<button id="searchbtn" onClick={() => getwheatherinfo()}> search </button>    
</label>

</div>

       <Temp temp={temp}/>
       </div>
       
       
       
       </>   
    
  )
}

export default Wheather


