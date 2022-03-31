import { withRouter } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import styles from "./profilePage.module.css";

const ProfilePage = ({ history }) => {
  const userInfo = useAuth();

  const logoutHandler = () => {
    localStorage.removeItem("auth token");
    window.location.reload();
  };

  return (
    <div className={styles.profileContainer}>
      <h1>Your Profile</h1>
      <div>
        <p className={styles.welcomeMsg}> Welcome {userInfo.name}</p>
        <p className={styles.emailP}>Email : {userInfo.email}</p>
        <p>{userInfo.isAdmin ? "You are an admin" : "You are not an admin"}</p>
      </div>
      {userInfo ? (
        <button className={styles.logoutBtn} onClick={logoutHandler}>
          Logout
        </button>
      ) : null}
    </div>
  );
};

export default withRouter(ProfilePage);
