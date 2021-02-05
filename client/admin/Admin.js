import React from 'react'
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main'
import TheContent from './TheContent';
import Footer from '../core/Footer'
export default function Admin() {
   
    return (
        <div className='containers'>
            <Sidebar  />
            <Main  />
           
        </div>
    )
}
