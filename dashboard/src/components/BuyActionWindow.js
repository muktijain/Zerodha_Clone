import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";
import axios from "axios";
import { toast } from "react-toastify";
import BASE_URL from "../enviornment";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, order }) => {
  const generalContext = useContext(GeneralContext);
  // const [stockQuantity, setStockQuantity] = useState(0);
  // const [stockPrice, setStockPrice] = useState(0.0);

  const [stockQuantity, setStockQuantity] = useState(order?.qty || 0);
  const [stockPrice, setStockPrice] = useState(order?.price || 0.0);
  const [redirecting, setRedirecting] = useState(false);
  const isEditMode = !!order;

 const token = localStorage.getItem("token");

  useEffect(() => {
    // const token = localStorage.getItem("token");
    if (!token) {
      setRedirecting(true);
      toast.warning("Please login to place orders!", { toastId: "auth-error" });
      // toast.warning("Redirecting to login page...");
      setTimeout(() => {
        generalContext.closeWindow();
        window.location.href = "https://0dhaclone.netlify.app/login";
      }, 2000);
    }
  }, []);
if (!token) return null;

  const handleCancelClick = () => {
    generalContext.closeWindow();
  };
  // const userId = localStorage.getItem("userId");
  const handleBuyClick = async () => {
    // const token = localStorage.getItem("token");
    if (!token) return;
    try {
      await axios.post(
        `${BASE_URL}/newOrder`,
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "buy",
        },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      toast.success("Order placed successfully!");
      console.log("Order placed!");
      generalContext.closeWindow();
    } catch (err) {
      toast.error("Failed to place order");
    }
  };

  const handleUpdateClick = async () => {
    console.log("Updating order:", order);
    try {
      await axios.put(`${BASE_URL}/updateOrder/${order._id}`, {
        qty: stockQuantity,
        price: stockPrice,
      });

      toast.success("Order updated successfully!");
      window.location.reload();
      generalContext.closeWindow();
    } catch (err) {
      toast.error("Failed to update order");
    }
  };
  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              required
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              required
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div
          onClick={() => {
            if (
              !stockQuantity ||
              stockQuantity <= 0 ||
              !stockPrice ||
              stockPrice <= 0
            ) {
              toast.warning("Please enter valid quantity and price!");
            }
          }}
        >
          <button
            className={`btn btn-blue ${
              !stockQuantity || !stockPrice ? "btn-disabled" : ""
            }`}
            disabled={
              redirecting ||
              !stockQuantity ||
              stockQuantity <= 0 ||
              !stockPrice ||
              stockPrice <= 0
            }
            onClick={isEditMode ? handleUpdateClick : handleBuyClick}
          >
            {isEditMode ? "Modify" : "Buy"}
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
