import React from "react";

function Footer() {
  return (
    <footer style={{backgroundColor: "rgb(250, 250, 250)"}}>
    <div className="container border-top mt-5 mb-5">
      <div className="row mt-5">
        <div className="col">
          <img
            src="media/images/Logo.svg"
            alt="zerodha logo"
            style={{ width: "50%" }}
          />
          <p className="mt-3">
            &copy; 2010-2024, Not Zerodha Broking Ltd. All rights reserved.{" "}
            <br />
          </p>
        </div>
        <div className="col mb-3">
          <p className="fs-5">Account</p>
          <a href="#" className="text-muted">Open demat account</a>
          <br /><br />
          <a href="#" className="text-muted">Minor demat account</a>
          <br /><br />
          <a href="#" className="text-muted">NRI demat account</a>
          <br /><br />
          <a href="#" className="text-muted">HUF demat account</a>
          <br /><br />
          <a href="#" className="text-muted">Commodity</a>
          <br /><br />
          <a href="#" className="text-muted">Dematerialisation</a>
          <br /><br />
          <a href="#" className="text-muted">Fund transfer</a>
          <br /><br />
          <a href="#" className="text-muted">MTF</a>
        </div>
        <div className="col mb-3">
          <p className="fs-5">Support</p>
          <a href="#" className="text-muted">Contact us</a>
          <br /><br />
          <a href="#" className="text-muted">Support portal</a>
          <br /><br />
          <a href="#" className="text-muted">How to file a complaint?</a>
          <br /><br />
          <a href="#" className="text-muted">Status of your complaints</a>
          <br /><br />
          <a href="#" className="text-muted">Bulletin</a>
          <br /><br />
          <a href="#" className="text-muted">Circular</a>
          <br /><br />
          <a href="#" className="text-muted">Z-Connect blog</a>
          <br /><br />
          <a href="#" className="text-muted">Downloads</a>
        </div>
        <div className="col mb-3">
          <p className="fs-5">Company</p>
          <a href="#" className="text-muted">About</a>
          <br /><br />
          <a href="#" className="text-muted">Philosophy</a>
          <br /><br />
          <a href="#" className="text-muted">Press & media</a>
          <br /><br />
          <a href="#" className="text-muted">Careers</a>
          <br /><br />
          <a href="#" className="text-muted">Zerodha Cares (CSR)</a>
          <br /><br />
          <a href="#" className="text-muted">Zerodha.tech</a>
          <br /><br />
          <a href="#" className="text-muted">Open source</a>
          <br /><br />
          <a href="#" className="text-muted">Referral program</a>
        </div>
        <div className="col mb-3">
          <p className="fs-5">Quick links</p>
          <a href="#" className="text-muted">Upcoming IPOs</a>
          <br /><br />
          <a href="#" className="text-muted" >Brokerage charges</a>
          <br /><br />
          <a href="#" className="text-muted">Market holidays</a>
          <br /><br />
          <a href="#" className="text-muted">Economic calendar</a>
          <br /><br />
          <a href="#" className="text-muted">Calculators</a>
          <br /><br />
          <a href="#" className="text-muted">Markets</a>
          <br /><br />
          <a href="#" className="text-muted">Sectors</a>
          <br /><br />
          <a href="#" className="text-muted">Gift Nifty</a>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
