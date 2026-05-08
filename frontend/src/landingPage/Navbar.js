import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div class="container mb-5">
      <nav
        class="navbar navbar-expand-lg border-bottom"
        style={{
          backgroundColor: "#FFF",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 999,
        }}
      >
        <div class="container p-2">
          <Link class="navbar-brand" to="/">
            <img
              src="media/images/logo.svg"
              alt="logo"
              style={{ width: "25%" }}
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active text-muted" aria-current="page" to="/signup">
                    Signup
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active text-muted" to="/about">

                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active text-muted" to="/product">
                    Product
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active text-muted" to="/pricing ">
                    Pricing
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active text-muted" to="/support">
                    Support
                  </Link>
                </li>
                <li class="nav-item">
                  
                   <i class="fa-solid fa-bars"></i>
           
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
