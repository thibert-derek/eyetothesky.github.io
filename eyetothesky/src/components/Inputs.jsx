import React, {useState} from 'react';
// import axios from 'axios';
import { UilSearch, UilLocationPoint} from '@iconscout/react-unicons';

function Inputs({setQuery, units, setUnits}) {
  const [city, setCity] = useState("");

  const handleUnitChange = (e) => {
    const selectedUnit = e.currentTarget.name
    if(units !== selectedUnit) setUnits(selectedUnit);
  }

  const handleSearchClick = () => {
    if (city !== '') setQuery({q: city})
  };

  const handleLocationClick = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat, lon
        });
      });
    }
  };

  return (
    <div className="justify-center md:flex mt-[125px] md:w-[700px] md:mt-[0px] lg:ml-[240px] active:z-0">
        <div className="items-center justify-center flex flex-row w-full space-x-4">

        <input 
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
        type="text" 
        placeholder="Search for city...."
        className="flex-1 h-[50px] rounded bg-white text-xl font-light p-2 w-full focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch 
        size={40} 
        className="text-white cursor-pointer transition ease-out hover:scale-125"
        onClick={handleSearchClick}
        />
        
        <UilLocationPoint 
        size={40} 
        className="text-white cursor-pointer transition ease-out hover:scale-125"
        onClick={handleLocationClick}/>
        </div>

        <div className="flex flex-row p-2 items-center justify-center">
          <button name="metric" className="text-4xl text-white font-md transition ease-out hover:scale-125"
          onClick={handleUnitChange}>&deg;C</button>
          {/* <p className="text-xl text-white mx-1">  |  </p> */}
          <button name="imperial" className="text-4xl text-white pl-2 font-md transition ease-out hover:scale-125"
          onClick={handleUnitChange}>&deg;F</button>
        </div>
    </div>
  );
}

export default Inputs;