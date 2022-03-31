import { Link } from "react-router-dom";
import Img404 from "../assets/404.svg";
import styles from "./notFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.notFoundPage__img}>
        <img src={Img404} alt="404" />
      </div>
      <div className={styles.notFoundDesc}>
        <h2>Oops, Page not found</h2>
        <p>
          We are very sorry for the inconvenience. It looks you're trying to
          access the page that is not available or has been deleted.
        </p>
        <Link to="/">
          <button className="btn primary">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
