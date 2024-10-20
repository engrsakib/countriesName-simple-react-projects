import { useEffect } from "react";
import { useState } from "react";

const Contries = () => {
    const [country, setCountry] = useState([]);

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => console.log(data));
    },[])
    return (
        <div>
            <h3 className="text-3xl">Countries</h3>            
        </div>
    );
};

export default Contries;