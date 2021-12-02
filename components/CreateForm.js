import { useState, useEffect } from "react";

export default function CreateForm({ handleNewLocation }) {
  const [minCustomerPerHour, setMinCustomerPerHour] = useState(0);
  const [location, setLocation] = useState("");
  const [maxCustomersPerHour, setMaxCustomerPerHour] = useState(0);
  const [avgCookiesPerSale, setAvgCookiesPerSale] = useState(0);

  const handleAddStand = (e) => {
    e.preventDefault();
    handleNewLocation(location);
  };
  return (
    <div className="w-screen p-2 pr-36 pl-36 ">
    <form
    onSubmit={handleAddStand}
    className="flex-col content-center w-full p-4 pt-4 pb-10 mt-5 bg-green-400 rounded-lg justify-arround md:flex-row "
  >
   
    <div className="flex justify-around p-4 mt-5 ml-24">
      <label className="absolute font-semibold text-1xl -ml-60 w-96 top-36">ADD LOCATION</label>
      <input
        value={location}
        type="text"
        className="flex justify-center w-7/12 p-3 mt-5 -ml-5 rounded-lg h-11"
        onChange={(e) => setLocation(e.target.value)}
        required
        placeholder="Cookie Stand Location"
      />
      <button type="submit" className="flex-row w-4/12 h-16 p-4 px-4 bg-green-600 ml-18 rounded-xl">
        CREATE STAND  
      </button>
    </div>
    

    <section className="flex flex-row flex-wrap justify-around p-4 ">
      <div className="flex flex-col w-3/12 pl-5 w-s l-5">
        <label className="m-auto">Minimum Customer per Hour</label>
        <input
          className="p-2 pl-2 mt-5 ml-5 rounded-lg h-11"
          type="number"
          value={minCustomerPerHour}
          onChange={(e) => setMinCustomerPerHour(e.target.value)}
        />
      </div>
      <div className="flex flex-col w-3/12 pl-2 ">
        <label className="m-auto">Maximum Customers per Hour</label>
        <input
          className="p-2 pl-2 mt-5 -ml-5 rounded-lg h-11"
          value={maxCustomersPerHour}
          onChange={(e) => setMaxCustomerPerHour(e.target.value)}
          type="number"
        />
      </div>
      <div className="flex flex-col w-3/12 pl-2 ">
        <label className="m-auto">Average Cookies per Sale</label>
        <input
          className="p-2 pl-2 mt-5 -ml-5 rounded-lg h-11"
          type="number"
          value={avgCookiesPerSale}
          onChange={(e) => setAvgCookiesPerSale(e.target.value)}
          
        />
      </div>
      
    </section>
  </form>
  </div>
  );
}
