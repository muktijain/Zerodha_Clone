import React from 'react';

function Awards () {
    return (  
        <div className='container p-5 mt-5 mb-5'>
            <div className='row align-items-center'>
            <div className='col-6'>
                <img src='media/images/largestBroker.svg' alt='awards' className='mb-5' />
            </div>

            <div className='col-6 mt-2'>
                <h1> Largest stock broker in India</h1>
                <p>2 + million Zerodha clients contribute to over 15% of all retail trades order volumes in India daily by trading and investing in:</p>
                <div className='row'>
                    <div className='col-6'>
                    <ul className='mt-4 px-2'>
                        <li><p>Futures and Options</p></li>
                        <li><p>Currency derivatives</p></li>
                        <li><p>Commodity derivatives </p></li>
                    </ul>    
                    </div>

                        <div className='col-6'>
                            <ul className='mt-4'>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct Mutual Funds </p></li>
                                <li><p>Bonds</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className='row'>
                        <img style={{width: "80%"}} src='media/images/pressLogos.png' alt='pressLogos' className='mb-5 mt-3' />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Awards;