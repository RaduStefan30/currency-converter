import { useParams } from "react-router-dom";

import "./Converted.scss";

const Converted = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default Converted;
