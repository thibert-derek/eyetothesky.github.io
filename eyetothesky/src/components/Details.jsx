import React from 'react'
import {
    UilCloud,
    UilDashboard,
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";
import "@fortawesome/fontawesome-free";
import { formatToLocalTime, iconUrlFromCode } from '../services/weather';
//import { handleUnitChange } from '/Inputs';

function Details({weather: {
   description, icon, temp, temp_min, temp_max, sunrise, sunset,
   speed, humidity, feels_like, timezone, units, pressure, all
}}) {

    const windUnit = units === "metric" ? "km/h" : "mph";
  return (
    <div className="w-full lg:w-[82%] my-5 lg:ml-[240px] border-2 rounded lg:m-5 lg:p-5">
        <div className="flex flex-col items-center justify-center py-3 text-3xl md:text-4xl
        text-white capitalize font-bold">
            <p>{description}</p>
            
        </div>
        <div className="flex flex-col md:flex-row items-center
        justify-between text-white px-4 pb-4">
            <img 
            src={iconUrlFromCode(icon)}
            alt="" className="w-40"/>
            <p className="text-6xl md:text-8xl pb-4">
                {`${temp.toFixed()}`}&deg;
            </p>
            
            <div className="flex flex-col space-y-2 py-4">
                <div className="flex font-light text-2xl
                items-center justify-right">
                    <UilTemperature size={30} className="mr-1"/>
                    Feels Like:
                <span className="font-medium ml-1">{`${feels_like.toFixed()}`}&deg;</span>
                </div>
                <div className="flex font-light text-2xl
                items-center justify-right">
                    <UilDashboard size={30} className="mr-1"/>
                    Pressure:
                <span className="font-medium ml-1">{`${pressure.toFixed()}`} hPa</span>
                </div>
                <div className="flex font-light text-2xl
                items-center justify-right">
                    <UilTear size={30} className="mr-1"/>
                    Humidity:
                <span className="font-medium ml-1">{`${humidity.toFixed()}`}%</span>
                </div>
                <div className="flex font-light text-2xl
                items-center justify-right">
                    <UilWind size={30} className="mr-1"/>
                    Wind:
                <span className="font-medium ml-1">{`${speed.toFixed()} ${windUnit}`}</span>
                </div>
                <div className="flex font-light text-2xl
                items-center justify-right">
                    <UilCloud size={30} className="mr-1"/>
                    Cloud Cover:
                <span className="font-medium ml-1">{`${all}`}%</span>
                </div>
            </div>
        </div>

        <div className="border-b-2 flex flex-row items-center justify-center
        space-x-2 text-white text-2xl md:text-xl md:border-t-0 border-t-2 py-5 lg:py-3 px-3">
            <UilSun size={30} className="hidden md:block mr-1"/>
            <p className="font-light">Sunrise: <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}</span></p>
            <p className="font-light">|</p>
            <UilSunset size={30} className="hidden md:block mr-1"/>
            <p className="font-light">Sunset: <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}</span></p>
            </div>
        <div className="flex flex-row items-center justify-center
        space-x-2 text-white text-2xl md:text-xl md:border-t-0 border-t-2 py-5 lg:py-3 px-3"> 
            <UilArrowUp size={30} className="hidden md:block mr-1"/>
            <p className="font-light">High: <span className="font-medium ml-1">{`${temp_max.toFixed()}`}&deg;</span></p>
            <p className="font-light">|</p>
            <UilArrowDown size={30} className="hidden md:block mr-1"/>
            <p className="font-light">Low: <span className="font-medium ml-1">{`${temp_min.toFixed()}`}&deg;</span></p>
        
        </div>

    </div>
  );
}

export default Details;