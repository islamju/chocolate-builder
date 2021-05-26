import classes from "./OpenDrower.module.css";

const OpenDrower = ({click}) => {
    return ( 
        <div className={classes.OpenDrower} onClick={click}>
            <div></div>
            <div></div>
            <div></div>
        </div>
     );
}
 
export default OpenDrower;