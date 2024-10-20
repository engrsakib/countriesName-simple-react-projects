import { useState } from "react";

const Deshh = ({desh}) => {
    const{name, flags, area, population, cca3} = desh;

    const[vis, setvis] = useState(false);
    const handelvis = () =>{
        setvis(!vis);
    }
    return (
      <div className="country">
        <h2>Name: {name.common}</h2>
        <img src={flags.png} alt="" />
        <p>population: {population}</p>
        <p>area: {area}</p>
        <p>country code: {cca3}</p>
        <button onClick={handelvis} className="btn btn-secondary">{vis?"Visited":"On Going"}</button> <br />
        {
            vis ? "I have allrady visited" : "I will visit as soon as possible"
        }
      </div>
    );
};

export default Deshh;