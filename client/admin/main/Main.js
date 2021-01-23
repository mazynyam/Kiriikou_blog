import React from 'react'
import Charts from '../charts/Charts'
import kik from '../../assets/kik.png'
export default function Main() {
    return (
        <main>
            <div className='main__container'>
                <div className='main__title'>
                    <img src={kik} alt='hello' />
                    <div className='main__greeting'>
                        <h1>Hello Kiriikou</h1>
                        <p>Welcome to your admin dashboard</p>
                    </div>
                </div>
                <div className='main__cards'>
                    <div className='cards'>
                        <i className='fa fa-user-o fa-2x text-lightblue'></i>
                        <div className='card__inner'>
                            <p className='text-primary-p'>Total Users</p>
                            <span className='font-bold text-title'>578,900</span>
                        </div>
                    </div>
                    <div className='cards'>
                        <i className='fa fa-calender fa-2x text-red'></i>
                        <div className='card__inner'>
                            <p className='text-primary-p'>Total Products</p>
                            <span className='font-bold text-title'>1,978,900</span>
                        </div>
                    </div>
                    <div className='cards'>
                        <i className='fa fa-calender fa-2x text-red'></i>
                        <div className='card__inner'>
                            <p className='text-primary-p'>Orders</p>
                            <span className='font-bold text-title'>578,900,000</span>
                        </div>
                    </div>
                    <div className='cards'>
                        <i className='fa fa-calender fa-2x text-red'></i>
                        <div className='card__inner'>
                            <p className='text-primary-p'>Total Shops</p>
                            <span className='font-bold text-title'>5,778,900</span>
                        </div>
                    </div>
                </div>
                <div className='charts'>
                    <div className='charts__left'>
                        <div className='charts__left__title'>
                            <div>
                                <h1>Products</h1>
                                <p>Daily Sales</p>
                            </div>
                            <i className='fa fa-chart'></i>
                        </div>
                        <Charts />
                    </div>
                    <div className='charts__right'>
                        <div className='charts__right__title'>
                            <div>
                                <h1>Order</h1>
                                <p>Daily Orders</p>
                            </div>
                            <i className='fa fa-usd'></i>
                        </div>
                        <div className='chart__right__cards'>
                            <div className='card1'>
                                <h1>Income</h1>
                                <p>$75,300</p>
                            </div>
                            <div className='card2'>
                                <h1>Sales</h1>
                                <p>$75,300</p>
                            </div>
                            <div className='card3'>
                                <h1>Users</h1>
                                <p>77800</p>
                            </div>
                            <div className='card4'>
                                <h1>Orders</h1>
                                <p>900</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
