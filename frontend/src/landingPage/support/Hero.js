import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4 className="mt-5">Support Portal</h4>
        <button className="btn btn-light mt-5">Track Tickets</button>
      </div>
      <div className="row p-5 m-4 ">
        <div className="col-6 p-3" >
          <h1 className="fs-3">
            Search for an answer or browse help topics  <br/> to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O"  className="mb-3 mt-4"/>
          <br />
          <a href="">Track account opening</a> &nbsp; &nbsp;
          <a href="">Track segment activation</a> &nbsp; &nbsp;
          <a href="">Intraday margins</a> &nbsp; &nbsp;
          <a href="">Kite user manual</a>
        </div>
        <div className="col-2"></div>
        <div className="col-4 p-3 ">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;