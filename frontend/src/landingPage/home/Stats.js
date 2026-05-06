import React from 'react';

function Stats() {
    return ( 
        <div className='container mt-5 p-3 mb-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <h1 className='mt-5 mb-5'> Trust with confidence </h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>We believe in putting our customers first and providing them with the best possible experience.</p>
                    <h2 className='fs-4'>No spams or gimmicks</h2>
                    <p className='text-muted'>We don't believe in cluttering your inbox with unnecessary emails or using misleading tactics.</p>
                    <h2 className='fs-4'>The Zerodha Universe</h2>
                    <p className='text-muted'>From stocks to mutual funds, we've got you covered with a wide range of investment options.</p>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>Learn how to make your money work for you with our comprehensive financial education resources.</p>
                </div>
                <div className='col-6 p-5'>
                    <img src='media/images/ecosystem.png' alt='ecosystem img' className='mb-5' style={{width: '90%'}} />
                     <div className='text-center'>
                        <a href='' className='mx-5' style={{textDecoration: 'none'}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                        <a href='' style={{textDecoration: 'none'}}>Try kite <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                                   
            </div>
        </div>
     );
}

export default Stats;