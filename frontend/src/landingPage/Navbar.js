import React from "react";

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
          <a class="navbar-brand" href="#">
            <img
              src="media/images/logo.svg"
              alt="logo"
              style={{ width: "25%" }}
            />
          </a>
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
                  <a class="nav-link active text-muted" aria-current="page" href="#">
                    Signup
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active text-muted" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active text-muted" href="#">
                    Product
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active text-muted" href="#">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active text-muted" href="#">
                    Support
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active " href="#">
                   <i class="fa-solid fa-bars"></i>
                  </a>
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
