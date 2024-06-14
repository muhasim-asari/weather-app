import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="search by city..."
          className="text-gray-500 text-xl p-2 font-light w-full shadow-xl capitalize focus:outline-none placeholder:lowercase"
        />
        <BiSearch
          onClick={handleSearchClick}
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125"
        />
        <BiCurrentLocation
          onClick={handleCurrentLocation}
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125"
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          onClick={() => setUnits("metric")}
          className="text-2xl font-medium transition ease-out hover:scale-125"
        >
          °C
        </button>
        <p className="text-2xl font-mediummx-1">|</p>
        <button onClick={() => setUnits("imperial")} className="text-2xl font-medium transition ease-out hover:scale-125">
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
