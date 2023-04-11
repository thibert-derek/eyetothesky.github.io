import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import Details from './components/Details';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weather';
import { useEffect, useState } from 'react';

function App() {
  const [query, setQuery] = useState({q: ''})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear())

  useEffect(() => {
    if (query?.q !== ''){
    const fetchWeather = async() => {
          await getFormattedWeatherData({...query, units }).then(data =>
           {
            setWeather(data);
           } );
          
        };
      
      fetchWeather();
      getYear();
    }
  }, [query, units])

  // const formatBackground = () => {
  //   if (!weather) return "from-blue-500 to-blue-700";
  //   const threshold = units === "metric" ? 25 : 77;
  //   const freeze = units === "metric" ? 5 : 40;
  //   if (weather.temp >= threshold) return "from-orange-700 to-red-700";

  //   else if(weather.temp <= freeze) return "from-purple-700 to-blue-700";

  //   return "from-blue-500 to-blue-700";
  // };

  // const fetchWeather = async() => {
  //   const data = await getFormattedWeatherData({q: 'london'});
  //   console.log(data);
  // };

// fetchWeather();

  return (
    <div className= {`mx-auto flex flex-col max-w-screen-xl py-5 px-5 bg-gradient-to-br h-fit shadow-xl-700`} >
      {/* <h1 className="py-1 text-4xl
        text-white flex font-md w-[40%]">Eye To The Sky</h1> */}
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>

    {weather && (
      <div>
      <TimeAndLocation weather={weather}/>
      <Details weather={weather}/>
      <Forecast title="Hourly Forecast" items={weather.hourly}/>
      <Forecast title="Daily Forecast" items={weather.daily}/>
      </div>
  )}
  <div className="flex items-center justify-center py-6 text-white">&copy; 2022 - {date}&nbsp;<a href="https://thibert-derek.github.io/site/" className="hover:underline">Derek Thibert</a></div>
    </div>
  );
}

export default App;
