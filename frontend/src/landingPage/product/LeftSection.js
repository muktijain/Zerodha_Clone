import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row ">
        <div className="col-6">
          <img src={imageUrl} alt="Product" className="img-fluid" />
        </div>
         {/* <div className="col-1"></div> */}
        <div className="col-6 p-5">
          <h2>{productName}</h2>
          <p className="fs-5 text-muted">{productDescription}</p>
          <div>
            <a href={tryDemo} className="mb-3">
              Try demo <i class="fa-solid fa-arrow-right"></i>
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href={learnMore} className="mb-3">
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="mt-4">
            <a href={googlePlay} className="mb-3">
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="img-fluid"
              />
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href={appStore} className="mb-3">
              <img
                src="media/images/appStoreBadge.svg"
                alt="App Store"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
