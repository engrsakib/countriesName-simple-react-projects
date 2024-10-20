import { useEffect } from "react";
import { useState } from "react";
import Deshh from "./Deshh";

const Contries = () => {
  const [country, setCountry] = useState([]);
  const[vistCont, setvistCont] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  const handlevistCont = (country) =>{
    console.log("add this list");
    const newVisCont = [...vistCont, country];
    setvistCont(newVisCont);
  }
  return (
    <div>
      <h3 className="text-3xl">Countries : {country.length}</h3>
      <div>
        <h5 className="text-2xl text-red-600">Visitded Countries {vistCont.length}</h5>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {country.map((desh) => (
          <Deshh
            key={desh.cca3}
            handlevistCont={handlevistCont}
            desh={desh}
          ></Deshh>
        ))}
      </div>
    </div>
  );
};

export default Contries;
