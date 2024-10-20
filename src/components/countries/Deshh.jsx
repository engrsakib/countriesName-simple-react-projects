import { useState } from "react";

const Deshh = ({ desh, handlevistCont }) => {
  const { name, flags, area, population, cca3 } = desh;

  const [vis, setvis] = useState(false);
  const handelvis = () => {
    setvis(!vis);
  };
//   console.log(handlevistCont);
  return (
    <div className="country">
      <h2>Name: {name.common}</h2>
      <img src={flags.png} alt="" />
      <p>population: {population}</p>
      <p>area: {area}</p>
      <p>country code: {cca3}</p>
      <button onClick={() => handlevistCont(desh)} className="btn btn-error m-3">
        Mark as visited
      </button>
      <button
        onClick={handelvis}
        className={`btn ${vis ? "pb" : "btn-secondary"}`}
      >
        {vis ? "Visited" : "On Going"}
      </button>{" "}
      <br />
      {vis ? "I have allrady visited" : "I will visit as soon as possible"}
    </div>
  );
};

export default Deshh;