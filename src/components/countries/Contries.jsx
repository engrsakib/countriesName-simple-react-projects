import { useEffect } from "react";
import { useState } from "react";
import Deshh from "./Deshh";

const Contries = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  return (
    <div>
      <h3 className="text-3xl">Countries : {country.length}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {country.map((desh) => (
          <Deshh key={desh.cca3} desh={desh}></Deshh>
        ))}
      </div>
    </div>
  );
};

export default Contries;
