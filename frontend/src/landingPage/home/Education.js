import React from 'react';

function Education () {
    return (  
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/education.svg' alt='education' className='mb-5' />
                </div>
                <div className='col-6 p-5'>
                    <h2>Free and open market education</h2>    
                    <p>Varsity, the largest online stock market education platform in the world covering everything you need to know about advance trading.</p>
                    <a href='' className='mb-3'>Varsity <i class="fa-solid fa-arrow-right"></i></a>   
                    <p>Trading Q&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration: 'none'}}>Trading Q&A<i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;