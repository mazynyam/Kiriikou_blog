import React, { useState} from 'react'
import Main from './main/Main';
import Navbar from './navbar/Navbar'
import Sidebar from './sidebar/Sidebar';


export default function Admin() {
    const [ sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () =>{
        setSidebarOpen(true)
    }
    const closeSidebar = () =>{
        setSidebarOpen(false)
    }
    return (
        <div className='containers'>
            <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
                <Main />
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        </div>
    )
}
