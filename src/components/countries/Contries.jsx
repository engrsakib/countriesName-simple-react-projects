import { useEffect } from "react";
import { useState } from "react";
import Deshh from "./Deshh";

const Contries = () => {
  const [country, setCountry] = useState([]);
  const[vistCont, setvistCont] = useState([]);
  const [vistFlag, setvistFlag] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  const handlevistCont = (country) =>{
    const newVisCont = [...vistCont, country];
    setvistCont(newVisCont);
  }

  const handleVistFlag = (flag) =>{
   const newFlag = [...vistFlag, flag];
   setvistFlag(newFlag);
  }
  return (
    <div>
      <h3 className="text-3xl">Countries : {country.length}</h3>
      <div>
        <h5 className="text-2xl text-red-600">
          Visitded Countries {vistCont.length}
        </h5>
        <ul className="">
          {vistCont.map((country) => (
            <li className="list-disc" key={country.cca3}>
              {country.name.common}
            </li>
            
          ))}
        </ul>
       <ul className="flex gap-2 flex-wrap">
        {
            vistFlag.map((flag, idx) => (<img className="w-[100px]" key={idx} src={flag}></img>))
        }
       </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {country.map((desh) => (
          <Deshh
            key={desh.cca3}
            handleVistFlag={handleVistFlag}
            handlevistCont={handlevistCont}
            desh={desh}
          ></Deshh>
        ))}
      </div>
    </div>
  );
};

export default Contries;
