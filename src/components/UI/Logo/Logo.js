import classes from "./Logo.module.css";
import logo from "../../../images/LOGO.png";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="Logo of the Pizza project" />
      <div>Sweet Life</div>
    </div>
  );
}

export default Logo;