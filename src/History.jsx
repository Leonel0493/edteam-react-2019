import { useLocation, useParams } from "react-router-dom";

const History = () => {
  const location = useLocation();
  const param = useParams();

  return <div>{JSON.stringify(location)}</div>;
};

export default History;
