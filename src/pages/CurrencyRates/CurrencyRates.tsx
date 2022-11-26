import { useContext, useEffect, useReducer, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Currency } from "../../components/Currency/Currency";
import { initialState, reducer } from "../../reducer/reducer";
import { fetchAllCurencies, fetchCurrencyRates } from "../../service";

import "./CurrencyRates.scss";

const CurrencyRates = () => {
  const [state, dispatch] = useOutletContext<any>();
  const { id } = useParams();

  const results = state.currencyRates?.map(([key, value]: string[]) => {
    if (key === id) return null;
    return (
      <Currency
        key={key}
        short={key}
        long={value}
        currencies={state.currencies}
      />
    );
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH", payload: { message: "Loading..." } });
      try {
        const currencyRates = await fetchCurrencyRates(id);
        dispatch({
          type: "FETCH_CURRENCY_RATES",
          payload: { currencyRates: Object.entries(currencyRates[id!]) },
        });

        //fetch all currencies in case of page refresh
        const currencies = await fetchAllCurencies();

        dispatch({
          type: "FETCH_CURRENCIES",
          payload: { currencies: Object.entries(currencies) },
        });
      } catch (error) {
        dispatch({
          type: "ERROR",
          payload: {
            message: "There was an error when trying to retrieve the data...",
          },
        });
      }
    };
    fetchData();
  }, [id]);
  return (
    <div className="currencies">
      <p>Currencies converted to {id}</p>
      {state.loading ? (
        <div>Loading</div>
      ) : (
        <ul className="currencies__list">{results}</ul>
      )}
    </div>
  );
};

export default CurrencyRates;
