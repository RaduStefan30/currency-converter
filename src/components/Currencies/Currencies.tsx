import { useReducer, useEffect, Fragment } from "react";
import { reducer, initialState } from "../../reducer/reducer";
import { fetchAllCurencies } from "../../service";
import { Currency } from "../Currency/Currency";

import "./Currencies.scss";

const Currencies = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH", payload: { message: "Loading..." } });
      try {
        const currencies = await fetchAllCurencies();

        dispatch({
          type: "FETCHED",
          payload: { data: Object.entries(currencies) },
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
    <Fragment>
      {state.loading ? (
        <div>Loading</div>
      ) : (
        <ul>
          {state.data &&
            state.data.map(([key, value]: [string, string]) => {
              return <Currency key={key} short={key} long={value} />;
            })}
        </ul>
      )}
    </Fragment>
  );
};

export default Currencies;
