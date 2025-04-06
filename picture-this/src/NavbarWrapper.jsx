import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function NavbarWrapper() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
};

export default NavbarWrapper;