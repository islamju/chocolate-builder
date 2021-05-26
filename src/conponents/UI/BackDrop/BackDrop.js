import classes from "./BackDrop.module.css";

const BackDrop = ({show, click}) => {
    return ( 
      show ?  <div className={classes.BackDrop} onClick={click}></div> :null
     );
}
 
export default BackDrop;