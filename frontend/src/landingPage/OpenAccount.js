import React from 'react';

function OpenAccount() {
    return (  
        <div className='container mt-2 p-5 mb-5'>
            <div className='row text-center'>
                <h3 className='mb-5'> Open a Zerodha account</h3>
                <p className='mb-5 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button style={{ width: "20%", margin: "0 auto" }} className='btn btn-primary p-2'> Sign up for free</button>
            </div>
        </div>
    );
}

export default OpenAccount;