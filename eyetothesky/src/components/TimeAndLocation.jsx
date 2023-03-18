import React from 'react'
import { formatToLocalTime } from '../services/weather';

function TimeAndLocation({weather: {dt, timezone, name, country}}) {
  return (
    <div className="lg:ml-[240px] w-[100%] lg:w-[82%] border-2 p-5 rounded my-5 lg:p-5">
    <div className="flex items-center justify-center">
        <p className="text-white text-2xl font-light">
        {formatToLocalTime(dt, timezone)}
        </p>
    </div>

    <div className="flex items-center justify-center my-3">
        <p className="text-white text-4xl md:text-6xl font-medium">
            {`${name}, ${country}`}
        </p>
    </div>
    </div>
  )
}

export default TimeAndLocation;