import React from "react";
function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row mb-5">
        <div className="col-6 p-5 mt-5">
          <h2>{productName}</h2>
          <p className="fs-5 text-muted">{productDescription}</p>
          <a href={learnMore} className="mb-3">
            Learn More <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-6">
          <img src={imageUrl} alt="Product" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
