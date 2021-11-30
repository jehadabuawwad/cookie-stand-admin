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
    <form
      onSubmit={handleAddStand}
      className="flex-col content-center justify-center p-4 m-auto bg-green-400 rounded-lg md:flex-row"
    >
      <h2 className="p-4 text-2xl text-center w-100">Create Cookie Stand</h2>
      <div className="flex gap-2 p-4 min-w-max">
        <label>Location</label>
        <input
          value={location}
          type="text"
          className="flex-grow"
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>

      <section className="flex flex-row flex-wrap justify-between gap-4 p-4 w-100">
        <div className="flex flex-col justify-center flex-grow p-2 align-middle bg-green-100 ">
          <label className="m-auto">Minimum Customer per Hour</label>
          <input
            className="pl-2"
            type="number"
            value={minCustomerPerHour}
            onChange={(e) => setMinCustomerPerHour(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center flex-grow p-2 align-middle bg-green-100">
          <label className="m-auto">Maximum Customers per Hour</label>
          <input
            className="pl-2"
            value={maxCustomersPerHour}
            onChange={(e) => setMaxCustomerPerHour(e.target.value)}
            type="number"
          />
        </div>
        <div className="flex flex-col justify-center flex-grow p-2 align-middle bg-green-100">
          <label className="m-auto">Average Cookies per Sale</label>
          <input
            className="pl-2"
            type="number"
            value={avgCookiesPerSale}
            onChange={(e) => setAvgCookiesPerSale(e.target.value)}
          />
        </div>
        <button type="submit" className="px-4 bg-green-600 rounded-xl">
          create
        </button>
      </section>
    </form>
  );
}
