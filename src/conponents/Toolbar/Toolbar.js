import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo"
import Nav from "../Nav/Nav";
import OpenDrower from "../Drower/OpenDrower/OpenDrower";

const Toolbar = ({ setOpen }) => {
    return (
        <div className={classes.Toolbar}>
            <Logo />
            <nav>
                <Nav />
            </nav>
            <OpenDrower click={setOpen}/>

        </div>
    );
}

export default Toolbar;