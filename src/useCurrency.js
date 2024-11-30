
import React, { useEffect, useState } from 'react';

const useCurrency = (currency) => {
    const [data, setData] = useState({});
    console.log(data)
    
    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const res =await fetch(`${import.meta.env.VITE_URL}/${currency}.json`);
                const jsonData = await res.json();
                setData(jsonData[currency]);
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        };

        fetchCurrencyData();
    }, [currency]);

    return data;
};

export default useCurrency;
