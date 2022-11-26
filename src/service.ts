export const fetchAllCurencies = async () => {
  const response = await fetch(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
  );
  const data = await response.json();
  return data;
};

export const fetchCurrencyRates = async (currency: any) => {
  const response = await fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
  );
  const data = await response.json();
  return data;
};

export const fetchCurrencyByDate = async (currency: string, date: string) => {
  const response = await fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${date}/currencies/${currency}.json`
  );
  const data = await response.json();
  return data;
};
