import { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountry}) => {
    const [visited, setVisited] = useState(false)
    const {name, capital, flags, population} = country;

    const handleVisited = () => {
        setVisited(!visited)
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2> {name.common} </h2>
            <p> {capital} </p>
            <img src={flags.png} alt="" />
            <p> {population} </p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <button onClick={handleVisited}> Visited </button>
            {
                visited ? 'Yes, Visited' : 'Not yet. I wish to'
            }
        </div>
    );
};

export default Country;