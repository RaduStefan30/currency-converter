import { useNavigate } from "react-router-dom";
import "./Currency.scss";

export const Currency = (props: {
  short: string;
  long: string;
  currencies: string[] | null;
}) => {
  const navigate = useNavigate();

  const { short, long, currencies } = props;

  const res =
    currencies &&
    currencies.map(([currencyKey, currencyValue]) => {
      if (currencyKey === short) return currencyValue;
    });

  return (
    <li className="currency" onClick={() => navigate(`/currency/${short}`)}>
      <div className="currency__text">
        <h3 className="currency__heading"> {res ? res : short}</h3>
        <h4 className="currency__name"> {res ? long : long}</h4>
      </div>
    </li>
  );
};
