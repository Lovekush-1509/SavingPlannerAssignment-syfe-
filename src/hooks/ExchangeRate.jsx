import { useEffect, useState } from "react";

// hook for api fetching

export const useExchangeRate = () => {
  const [rate, setRate] = useState(null);
  const [lastUpdated, setLastUpdated] = useState("");

  const fetchRate = async () => {
    const res = await fetch("https://v6.exchangerate-api.com/v6/5d50cd106e2b669f22a61c4e/latest/USD");
    const data = await res.json();
    console.log("rate fetched",data);
    setRate(data.conversion_rates.INR);
    setLastUpdated(new Date().toLocaleString());
  };

  useEffect(() => {
    fetchRate();
  }, []);

  return { rate, lastUpdated, refreshRate: fetchRate };
};
