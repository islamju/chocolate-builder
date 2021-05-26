import { useState } from "react";
import Drower from "../Drower/Drower"
import Toolbar from "../Toolbar/Toolbar"

const Layout = ({children}) => {
    const [openDrower, setOpenDrower] = useState(false)
    return ( 
        <div>
            <Toolbar setOpen={() => setOpenDrower(true)} />
            <Drower open={openDrower} setOpenDrower={() => setOpenDrower(false)}/>
            {children}
        </div>
     );
}
 
export default Layout;
<div></div>