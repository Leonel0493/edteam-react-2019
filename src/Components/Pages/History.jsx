import { useLocation } from "react-router-dom";

const History = () => {
  const location = useLocation();

  return <div>{JSON.stringify(location)}</div>;
};

export default History;
