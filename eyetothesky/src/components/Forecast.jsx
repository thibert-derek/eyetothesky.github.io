import React from 'react'
import { iconUrlFromCode } from '../services/weather';

function Forecast({title, items}) {
  return (
    <div className="lg:ml-[240px] w-full my-5 lg:m-5 lg:p-5 px-5 lg:w-[82%] border-2 rounded">
    <div className="flex items-center justify-center mt-5">
        <p className="text-white font-large text-3xl uppercase justify-center items-center">
            {title}
        </p>
    </div>
    <hr className="my-1"/>
    <div className="flex flex-col md:flex-row items-center py-5 justify-between text-white">
    {items.map((item, index) => (
           <div key={index} className="flex md:border-b-0 border-b-2 py-2 lg:py-0 flex-col items-center justify-center ">
            <p className="font-md text-xl">
               {item.event}
           </p>
           <p className="font-md text-xl justify-center">
               {item.title}
           </p>
           <img src={iconUrlFromCode(item.icon)}
           alt="" className="w-13 my-1"
           />
           <p className="font-md text-2xl lg:text-lg">{`${item.temp.toFixed()}`}&deg;</p>
           <p className="font-md text-lg hidden lg:flex capitalize">{`${item.text}`}</p>
           <p>P.O.P.</p>
           <p className="font-md text-lg">{`${item.pop.toFixed(1) * 100}`}%</p> 
           
           
   </div>  
    ))}
    {/* <div className="flex flex-col items-center justify-center">
        
            <p className="font-light text-sm">
                01:00 PM
            </p>
            <img src="http://openweathermap.org/img/wn/09d@2x.png"
            alt="" className="w-12 my-1"/>
            <p className="font-medium">13 &deg;</p>
            
    </div>
    <div className="flex flex-col items-center justify-center">

<p className="font-light text-sm">
    02:00 PM
</p>
<img src="http://openweathermap.org/img/wn/09d@2x.png"
alt="" className="w-12 my-1"/>
<p className="font-medium">13 &deg;</p>

</div>
<div className="flex flex-col items-center justify-center">

            <p className="font-light text-sm">
                03:00 PM
            </p>
            <img src="http://openweathermap.org/img/wn/09d@2x.png"
            alt="" className="w-12 my-1"/>
            <p className="font-medium">12 &deg;</p>
            
    </div>
    <div className="flex flex-col items-center justify-center">

            <p className="font-light text-sm">
                04:00 PM
            </p>
            <img src="http://openweathermap.org/img/wn/09d@2x.png"
            alt="" className="w-12 my-1"/>
            <p className="font-medium">13 &deg;</p>
            
    </div>
    <div className="flex flex-col items-center justify-center">

            <p className="font-light text-sm">
                05:00 PM
            </p>
            <img src="http://openweathermap.org/img/wn/09d@2x.png"
            alt="" className="w-12 my-1"/>
            <p className="font-medium">13 &deg;</p>
            
    </div> */}
    </div>
    </div>
  )
}

export default Forecast;