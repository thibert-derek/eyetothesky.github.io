import React from 'react'

function TopButtons({setQuery}) {

    const cities = [
        {
            id:1,
            title: 'Los Angeles'
        },
        {
            id:2,
            title: 'New York'
        },
        {
            id:3,
            title: 'London'
        },
        {
            id:4,
            title: 'Tokyo'
        },
        {
            id:5,
            title: 'Sydney'
        },
    ]

  return (
    <div className="bg-[#282c34] z-10 lg:border-r-2 lg:overflow-y:auto lg:fixed items-center justify-center h-[200px] lg:h-screen left-0 w-full lg:w-[250px] top-0 text-white">
              <h1 className="flex flex-col h-[70px] items-center justify-center m-auto py-5 lg:px-3 text-4xl lg:text-2xl
        text-white font-md font-bold">Eye To The Sky</h1>
        <div className="items-center flex flex-1 py-2 flex-col md:flex-row lg:flex-col gap-8.5">
            {cities.map((city) => (
                <button className="mx-4 my-1 md:my-4 transition text-lg ease-out hover:underline hover:scale-125" key={city.id} onClick={() => setQuery({q: city.title})}>
                    {city.title}
                </button>
            ))}
        </div>
    </div>
  );
}

export default TopButtons;