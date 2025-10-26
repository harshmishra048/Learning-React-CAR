import React from 'react'

function Card({userName , buttonLabel="aage jayaneg hum"}) {
    // console.log('props', props);

    
  return (
    <div className="relative h-[400px] w-[300px] rounded-md overflow-hidden">
      <img
        src="https://images.pexels.com/photos/32472477/pexels-photo-32472477.jpeg"
        alt="AirMax Pro"
        className="h-full w-full object-cover rounded-md"
      />

      <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent"></div>

      <div className="absolute bottom-4 left-4 text-left">
              <h1 className="text-lg font-semibold text-white">{userName}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black bg-gray-800/50 px-3 py-1 rounded-md hover:bg-gray-700/70 transition">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

export default Card
