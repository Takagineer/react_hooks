import { useLocation, useHistory } from "react-router-dom;";

export const Page1DeatailA = () => {
  const { state } = useLocation();
  const history = useHistory();

  const onClickBack = () => history.goBack();
  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onCliclk={onClickBack}>戻る</button>
    </div>
  );
};
