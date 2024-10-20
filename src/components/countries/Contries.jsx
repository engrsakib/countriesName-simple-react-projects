import { useEffect } from "react";
import { useState } from "react";
import Deshh from "./Deshh";

const Contries = () => {
    const [country, setCountry] = useState([]);

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
          .then((res) => res.json())
          .then((data) => setCountry(data));
    },[])
    return (
        <div>
            <h3 className="text-3xl">Countries : {country.length}</h3>   
            {
                country.map(desh => <Deshh key={desh.cca3} desh={desh}></Deshh>)
            }         
        </div>
    );
};

export default Contries;