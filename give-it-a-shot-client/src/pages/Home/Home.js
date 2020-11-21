import React from "react";
import icon from "./assets/alcohol_icon.png";
import { ButtonLink } from "../../components/ButtonLink";
import styles from "./assets/Home.module.scss";

export const Home = props => {
  console.log(props);
  return (
    <div className={styles.home}>
      {props.currentUser ? (
        <>
          <h1>Welcome Home.. Grab a Drink 🍸 </h1>
          <h2>Profile of user with ID {props.currentUser}</h2>
          <ButtonLink path="/quiz" text="Take the drink quiz" />
        </>
      ) : (
        <>
          <img
            className={`${styles.mainIcon} ${styles.centered}`}
            src={icon}
            alt=""
          />
          <ButtonLink
            className={`${styles.home2} ${styles.centered}`}
            path="/login"
            text="Login"
          />
          <ButtonLink
            className={`${styles.home3} ${styles.centered}`}
            path="/register"
            text="Register"
          />
        </>
      )}
    </div>
  );
};
