import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  //javascript object는 btn을 안에 갖고있음
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
