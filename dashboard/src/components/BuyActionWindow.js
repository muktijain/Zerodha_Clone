import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";
import axios from "axios";
import { toast } from "react-toastify";

import "./BuyActionWindow.css";
const baseUrl = "http://localhost:3002";

const BuyActionWindow = ({ uid, order }) => {
  const generalContext = useContext(GeneralContext);
  // const [stockQuantity, setStockQuantity] = useState(0);
  // const [stockPrice, setStockPrice] = useState(0.0);

  const [stockQuantity, setStockQuantity] = useState(order?.qty || 0);
  const [stockPrice, setStockPrice] = useState(order?.price || 0.0);
  const isEditMode = !!order;

  const handleCancelClick = () => {
    generalContext.closeWindow();
  };
  // const userId = localStorage.getItem("userId");
  const handleBuyClick = async () => {
    const token = localStorage.getItem("token");
    try{
      await axios.post(
      `${baseUrl}/newOrder`,
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
    } catch(err){
      toast.error("Failed to place order");
    }

  };

  const handleUpdateClick = async () => {
    console.log("Updating order:", order);
    try {
      await axios.put(`${baseUrl}/updateOrder/${order._id}`, {
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
        <div>
          <button
            className={`btn btn-blue ${
              !stockQuantity || !stockPrice ? "btn-disabled" : ""
            }`}
            disabled={
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
