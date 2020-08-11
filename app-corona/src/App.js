import React, {useEffect, useState} from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';


const App = () => {
  const [data, setData] = useState('');
  const [country, setCountry] = useState('');
  
  useEffect(() => {
    const fetchMyAPI = async() => {
      const data = await fetchData();

      setData(data);
    };

    fetchMyAPI();
  }, []);

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);

    setData(data);
    setCountry(country);

  }

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }

export default App;