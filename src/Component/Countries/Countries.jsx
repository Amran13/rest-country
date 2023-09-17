import { useEffect } from "react";
import { useState } from "react";
import './Countries.css';
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountry, setVisitedCountry] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = (country) => {
        setVisitedCountry([...visitedCountry, country.name.common])
        console.log(visitedCountry)
    }
    return (
        <div>
            <h2> {countries.length} </h2>
            <div>
                <h2>Visited Countries</h2>
                <ul>
                    
                </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} country={country}>
                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;