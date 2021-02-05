import React from 'react'
import Sidebar from '../sidebar/Sidebar';
import UsersList from '../Users/UsersList'
export default function Main() {
   
    return (
<main className='main'>
  <div className='main__container'>
      <div className='main__cards'>
            <div className='cards'>
                <i className='fa fa-users fa-2x text-lightblue'></i>
                <div className='card__inner'>
                    <p className='text-primary-p'>Total Users</p>
                    <span className='font-bold text-title'>578,900</span>
                </div>
            </div>
            <div className='cards'>
                <i className='fa fa-product-hunt fa-2x text-red'></i>
                <div className='card__inner'>
                    <p className='text-primary-p'>Total Products</p>
                    <span className='font-bold text-title'>45845</span>
                </div>
            </div>
            <div className='cards'>
                <i className='fa fa-shopping-cart fa-2x text-green'></i>
                <div className='card__inner'>
                    <p className='text-primary-p'>Total Orders</p>
                    <span className='font-bold text-title'>578,900,000</span>
                </div>
            </div>
            <div className='cards'>
                <i className='fa fa-tags fa-2x text-yellow'></i>
                <div className='card__inner'>
                    <p className='text-primary-p'>Total Shops</p>
                    <span className='font-bold text-title'>566</span>
                </div>
            </div>
        
        </div>
    <UsersList />
  </div>
</main>
//   <Footer />
) 
}