import { Link } from "react-router-dom";
import style from "./style.module.css";
import Btn from "../shared-components/button";
const NoMatch = () => {
  return (
    <div className={style.container}>
      <h1>Nothing to see here!</h1>
      <Btn className="noMatch">
        <Link to="/">Go to the Home page</Link>
      </Btn>
    </div>
  );
};

export default NoMatch;
