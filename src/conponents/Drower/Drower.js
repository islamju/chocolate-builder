import classes from "./Drower.module.css";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import BackDrop from "../UI/BackDrop/BackDrop"

const Drower = ({open, setOpenDrower}) => {
      const opennS = [
       classes.content ,
       open ? classes.open : classes.close
      ]
    return ( 
        <div className={classes.Drower}>
          <BackDrop show={open} click={setOpenDrower}/>
          <div className={opennS.join(' ')}>
              <Logo/>
              {/* <nav> */}
                  <Nav/>
              {/* </nav> */}
          </div>
            
        </div>
     );
}
 
export default Drower;