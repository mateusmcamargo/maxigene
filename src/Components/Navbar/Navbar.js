import './Navbar.css';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <section className="navbar">
            <nav>
                <div className='navbar-container user'>
                <NavLink to='/user' className={({isActive}) => isActive ? 'active' : ''}>
                    <i class="fa-solid fa-user"></i>
                </NavLink>
                </div>

                <div className='navbar-container pages'>
                
                <NavLink to='/farms' className={({isActive}) => isActive ? 'active' : ''}>
                    <i class="fa-solid fa-tractor"></i>
                </NavLink>
                <NavLink to='/newanimal' className={({isActive}) => isActive ? 'active' : ''}>
                    <i class="fa-solid fa-cow"></i>
                </NavLink>
                <NavLink to='/data' className={({isActive}) => isActive ? 'active' : ''}>
                    <i class="fa-solid fa-chart-pie"></i>
                </NavLink>
                <NavLink to='/config' className={({isActive}) => isActive ? 'active' : ''}>
                    <i class="fa-solid fa-gear"></i>
                </NavLink>
                </div>
            </nav>
        </section>

    );
}

export { Navbar };