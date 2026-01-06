// helper to convert currency


export const convertCurrency = (amount, currency, rate) => {
    return currency === "USD" ? amount * rate : amount / rate;
  };
  