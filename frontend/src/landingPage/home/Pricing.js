import React from 'react';

function Pricing () {
    return (  
       <div className='container p-5 mb-5 mt-5'>
        <div className='row'>
            <div className='col-4 p-5'>
                <h2 className='mb-5'> Unbeatable pricing </h2>
                <p className='text-muted'>We pioneered the concept of zero brokerage fees, making investing accessible to everyone.
                Our transparent pricing model ensures that you only pay for what you use, with no hidden fees or charges.
                </p>
                <a href='' style={{textDecoration: 'none'}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
            </div>
               <div className='col-2'></div>
            <div className='col-6 p-5'>
              <div className='row text-center'>
                <div className='col border p-5'>
                  <h1><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                  <p>Free equity delivery and <br /> direct mutual funds</p>
                </div>
                <div className='col border p-5'>
                  <h1><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                  <p>Intraday and F&O trading</p>
                </div>
              </div>
            </div>
         
        </div>
        </div>
    );
}

export default Pricing ;