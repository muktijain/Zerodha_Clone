import React from "react";
import { Link } from "react-router-dom";

function Hero () {
    return(
        <div className="container border-bottom mt-5 p-5 mb-5">
            <div className="row mt-5 text-center">
                <h1 className="mb-4">Zerodha Products</h1>
                <h2 className="mb-4 text-muted fs-5">Sleek, modern, and intuitive trading platforms</h2>
                <p> Check out  <Link to="#" className="text-decoration-none">our investment offerings <i class="fa-solid fa-arrow-right"></i></Link></p>
            </div>
        </div>
    )
}
export default Hero;