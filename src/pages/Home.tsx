import { useReducer, useEffect } from "react";
import { reducer, initialState } from "../reducer/reducer";
import { fetchAllCurencies } from "../service";
import "./_Home.scss";

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH", payload: { message: "Loading..." } });
      try {
        const currencies = await fetchAllCurencies();

        dispatch({
          type: "FETCHED",
          payload: { data: currencies },
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
    <main>
      <div>
        {state.loading ? (
          <div>Loading</div>
        ) : (
          <ul>
            {state.data &&
              Object.entries(state.data).map(([key, value]: any) => {
                return (
                  <li key={key}>
                    {key}--
                    {value}
                  </li>
                );
              })}
          </ul>
        )}
      </div>
    </main>
  );
};

export default Home;
