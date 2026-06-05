import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { Line } from "react-chartjs-2";
import { LineChart } from "./Charts/LineChart";
import BASE_URL from "../enviornment";
// const baseUrl = "http://localhost:3002";

const Orders = () => {
  // const userId = localStorage.getItem("userId");
  // Re-fetch when the buy window closes
  const generalContext = React.useContext(GeneralContext);
  const [orders, setOrders] = useState([]);

  const fetchOrders = () => {
    const token = localStorage.getItem("token");
    axios
      .get(`${BASE_URL}/allorders`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setOrders(res.data);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, [generalContext.isBuyWindowOpen]);


  const handleDeleteOrder = (id) => {
    axios
      .delete(`${BASE_URL}/deleteOrder/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        fetchOrders(); // Refresh the orders list after deletion
      });
  };

const labels = orders.map((order) => order.name);

const data = {
  labels,
  datasets: [
    {
      label: "Order Price",
      data: orders.map((order) => order.price),
      borderColor: "rgb(13, 44, 146)",
      backgroundColor: "rgba(31, 28, 223, 0.5)",
      tension: 0.3,
    },
  ],
};


  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th style={{ width: "10%" }}>#</th>
              <th style={{ width: "30%" }}>Name</th>
              <th style={{ width: "30%" }}>Qty</th>
              <th style={{ width: "10%" }}>Price</th>
              <th style={{ width: "10%" }}>Mode</th>
              <th style={{ width: "10%" }}></th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td>
                  <span className="mode-badge">{order.mode}</span>
                </td>
                <td>
                  <button
                    className="btn btn-blue"
                    onClick={() =>
                      generalContext.openBuyWindow(order.name, order)
                    }
                  >
                    Modify
                  </button>
                  <button
                    className="btn btn-red"
                    onClick={() => handleDeleteOrder(order._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      <LineChart data={data}/>
    </>
  );
};

export default Orders;
