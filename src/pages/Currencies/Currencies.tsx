import { useReducer, useEffect, Fragment, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { reducer, initialState } from "../../reducer/reducer";
import { fetchAllCurencies } from "../../service";
import { Currency } from "../../components/Currency/Currency";

import "./Currencies.scss";

const Currencies = () => {
  const [state, dispatch] = useOutletContext<any>();
  const [search, setSearch] = useState("");

  const results = state.currencies?.map(([key, value]: string[]) => {
    const hasResults =
      key.toLowerCase().includes(search.toLowerCase()) ||
      value.toLowerCase().includes(search.toLowerCase());
    if (!hasResults) return null;
    return <Currency key={key} short={key} long={value} currencies={null} />;
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH", payload: { message: "Loading..." } });
      try {
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
  }, []);

  return (
    <div className="currencies">
      <input
        className="currencies__search"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {state.loading ? (
        <div>Loading</div>
      ) : (
        <ul className="currencies__list">{results}</ul>
      )}
      {results?.every((el: any) => el === null) && (
        <div>No results found...</div>
      )}
    </div>
  );
};

export default Currencies;
