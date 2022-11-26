import { Link, Outlet, useLocation } from "react-router-dom";
import "./scss/main.scss";
import "./App.scss";
import { useEffect, useReducer, useState } from "react";
import { initialState, reducer } from "./reducer/reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  let location = useLocation();

  const [isConverter, setIsConverter] = useState(
    location.pathname === "/converter"
  );

  useEffect(() => {
    setIsConverter(location.pathname === "/converter");
  }, [location]);

  return (
    <div className="app">
      <h1 className="app__title text-gradient">Currency Converter</h1>
      <nav className="nav">
        <Link to="/" className={`nav__link ${!isConverter && "text-gradient"}`}>
          All Currencies
        </Link>
        <Link
          to="converter"
          className={`nav__link ${isConverter && "text-gradient"}`}
        >
          Converter
        </Link>
      </nav>
      <Outlet context={[state, dispatch]} />
    </div>
  );
};

export default App;
