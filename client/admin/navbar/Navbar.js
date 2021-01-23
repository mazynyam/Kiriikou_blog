import kik from '../../assets/kik.png'
import React from 'react'
const Navbar = ({ sidebarOpen, openSidebar}) =>{
    return (
        <nav className='navbars'>
            <div className='nav_icon' onClick={()=> openSidebar()}>
                <i className='fa fa-bars'></i>
            </div>
            <div className='navbar__left'>
                <a href='#'>Users</a>
                <a href='#'>Products</a>
                <a href='#'>Shops</a>
                <a href='#'>Orders</a>
                <a className='active_link' href='#'>Admin</a>
            </div>
            <div className='navbar__right'>
                <a href="#">
                    <i className='fa fa-search'></i>
                </a>
                <a href="#">
                    <i className='fa fa-clock'></i>
                </a>
                <a href=''>
                    <img src={kik} alt='logo' width='30'/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar