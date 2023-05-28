async function getExchangeRate(currencyCode) {
  try {
    const response = await fetch("https://api.exchangeratesapi.io/latest");
    const data = await response.json();

    if (!data.rates.hasOwnProperty(currencyCode)) {
      return null;
    }

    const exchangeRate = data.rates[currencyCode];
    return parseFloat(exchangeRate.toFixed(4));
  } catch (error) {
    throw new Error("Failed to fetch exchange rates");
  }
}
