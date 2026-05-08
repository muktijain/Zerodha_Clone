import React from 'react';
function Universe() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center">
        <h2 className="mb-4">The Zerodha Universe</h2>
        <p className="mb-5 text-muted">Extend your trading and investment experience even further with our partner platforms</p>
        <div className="col-md-4"style={{ marginBottom: '50px'}}>
            <img src='media/images/zerodhaFundhouse.png'  className="mt-4 img-fluid" style={{  width: '70%',height: '80px', objectFit: 'contain'}}></img>
            <p  className="mt-3 fs-7 text-muted">Zerodha Fundhouse</p>
            <img src='media/images/streakLogo.png' className="mt-4 img-fluid" style={{  width: '70%',height: '80px', objectFit: 'contain'}}></img>
            <p  className="mt-3 fs-7 text-muted">Streak</p>
        </div>
        <div className="col-md-4"style={{ marginBottom: '50px'}}>
            <img src='media/images/sensibullLogo.svg' className="mt-4 img-fluid" style={{  width: '70%',height: '80px', objectFit: 'contain'}}></img>
            <p  className="mt-3 fs-7 text-muted">Sensibull</p>
            <img src='media/images/smallcaseLogo.png' className="mt-4 img-fluid" style={{  width: '70%',height: '80px', objectFit: 'contain'}}></img>
            <p  className="mt-3 fs-7 text-muted">Smallcase</p>
        </div>
        <div className="col-md-4" style={{ marginBottom: '50px'}}>
            <img src='media/images/tijoriLogo.svg' className="mt-4 img-fluid" style={{  width: '70%',height: '80px', objectFit: 'contain'}}></img>
            <p  className="mt-3 fs-7 text-muted">Tijori</p>
            <img src='media/images/dittoLogo.png'  className="mt-4 img-fluid" style={{  width: '70%',height: '80px', objectFit: 'contain'}}></img>
            <p  className="mt-3 fs-7 text-muted">Ditto</p>
        </div>

        <button style={{ width: "20%", margin: "0 auto" }} className='btn btn-primary p-2 mt-5 mb-5'>Sign up for free</button>
      </div>
    </div>
            
  )
}

export default Universe;