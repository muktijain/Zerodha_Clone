import React from "react";

function Hero() {
  return (
        <div className="container border-bottom mt-5 p-5 mb-5">
            <div className="row mt-5 text-center">
                <h1 className="mb-4">Pricing</h1>
                <h2 className="mb-4 text-muted fs-5">List of all charges and taxes</h2>
            </div>
            <div className="row text-center mt-5 p-5">
                <div className="col-4 p-5">
                    <img src="media/images/pricing0.svg" alt="pricing" className="img-fluid"/>
                    <h2 className="mt-4 mb-3">Free equity delivery</h2>
                    <p className="text-muted fs-7">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 mr-5 ml-5 p-5">
                       <img src="media/images/intradayTrades.svg" alt="pricing" className="img-fluid"/>
                    <h2 className="mt-4 mb-3">Intraday and F&O trades</h2>
                    <p className="text-muted fs-7">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/pricing0.svg" alt="pricing" className="img-fluid"/>
                    <h2 className="mt-4 mb-3">Free direct MF</h2>
                    <p className="text-muted fs-7">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}
export default Hero;