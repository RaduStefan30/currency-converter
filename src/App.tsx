import { Link, Outlet } from "react-router-dom";
import "./scss/main.scss";

const App = () => {
  return (
    <div className="App">
      <h1 className="home__title">Currency Converter</h1>
      <Outlet />
    </div>
  );
};

export default App;
