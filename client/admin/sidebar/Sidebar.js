import React from 'react'
import kik from '../../assets/kik.png'

export default function Sidebar({ sidebarOpen, closeSidebar}) {
    return (
        <div  className={sidebarOpen ? 'sidebar-responsive': ''} id='sidebar'> 
            <div className='sidebar__title'>
                {/* <div className='sidebar__img'>
                    <img src={kik} size='30' alt='logo' />
                    <h1>Kiriikou.com</h1>
                </div> */}
                <div className='nav_icon'>
                <i className='fa fa-close' 
                id='sidebar'
                onClick={()=>closeSidebar()}></i>
                </div>
            </div>
            <div className='sidebar__menu'>
                <div className='sidebar__link active_menu_link'>
                    <i className='fa fa-home'></i>
                    <a style={{textDecoration:'none'}}href='#'>Dashboard</a>
                </div>
                <h2 style={{color:'white'}}>Resources</h2>
                <div className='sidebar__link'>
                    <i className='fa fa-user-secret'></i>
                    <a  style={{textDecoration:'none'}} href='#'>Users</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-building-o'></i>
                    <a  style={{textDecoration:'none'}} href='#'>Products</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-building-o'></i>
                    <a  style={{textDecoration:'none'}} href='#'>Shops</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-building-o'></i>
                    <a  style={{textDecoration:'none'}}href='#'>Orders</a>
                </div>
                <h2 style={{color:'white'}}>Pages</h2>
                <div className='sidebar__link'>
                    <i className='fa fa-building-o'></i>
                    <a style={{textDecoration:'none'}} href='#'>Blog</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-pages'></i>
                    <a style={{textDecoration:'none'}} href='#'>Pages</a>
                </div>
                <div className='sidebar__logout'>
                    <i className='fa fa-power-off'></i>
                    <a style={{textDecoration:'none'}} href='#'>Logout</a>
                </div>
            </div>
        </div>
    )
}
