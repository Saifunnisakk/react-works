
import Sidebar from "../components/Sidebar";
import AppNavbar from './../components/AppNavbar';
const Main = ({children}) => {
    return (<>
   
    <AppNavbar/>
    <div className="d-flex">
    <Sidebar/>
    <div className="container-fluid">{children}</div>
    </div>
    
    </>)
};

export default Main;