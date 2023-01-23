import { Link } from "react-router-dom";
import style from "./style.module.css";
import Btn from "../shared-components/button";
const NoMatch = () => {
  return (
    <div className={style.outline}>
      <div className={style.container}>
        <img src="/assets/images/error404.gif" alt="error404" />
        <h1>OOPS!PAGE NOT FOUND</h1>
        <h3>
          Sorry, the page you're looking for doesn't exist. If you think
          something is broken.report a problem.
        </h3>
        <div className={style.Btns}>
          <Btn className="noMatch">
            <Link to="/">Go to the Home page</Link>
          </Btn>
          <Btn className="reportProblem">
            <Link to="/">Report a problem</Link>
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default NoMatch;
