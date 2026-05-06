import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5 mt-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='hero img' className='mb-5' />
                <h1 className='mt-5'> Invest in everything </h1>
                <p> Online platform to invest in stocks, mutual funds and more </p>
                <button style={{ width: "20%", margin: "0 auto" }} className='btn btn-primary p-2 mb-5 mt-2'> Open an account </button>
            </div>
        </div>
     );
}

export default Hero;