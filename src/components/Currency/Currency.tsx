import { useNavigate } from "react-router-dom";
import "./Currency.scss";

export const Currency = (props: { short: string; long: string }) => {
  const navigate = useNavigate();

  const { short, long } = props;

  return (
    <li className="currency" onClick={() => navigate(`/currency/${short}`)}>
      <div className="currency__text">
        <h3 className="currency__heading"> {short}</h3>
        <h4 className="currency__name"> {long}</h4>
      </div>
    </li>
  );
};
