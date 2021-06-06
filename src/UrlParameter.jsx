import { useParams, useLocation } from "react-router-dom";

export const UrlParametes = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <h1>{id}</h1>
      <h1>クエリパラメーターは{query.get("name")}です</h1>
    </div>
  );
};
