import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./Charts/VerticalGraph";
import BASE_URL from "../enviornment";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/allholdings`); // fixed lowercase
        const holdings = res.data;

        // Fetch live price for each stock
        const updated = await Promise.all(
          holdings.map(async (stock) => {
            try {
              const { data } = await axios.get(`${BASE_URL}/stockprice/${stock.name}`);
              return { ...stock, price: data.price };
            } catch {
              return stock; // fallback to sample price
            }
          })
        );

        setAllHoldings(updated);
      } catch (err) {
        console.error("Failed to fetch holdings:", err);
      }
    };
    fetchHoldings();
  }, []);

  const totalInvestment = allHoldings.reduce((sum, stock) => sum + stock.avg * stock.qty, 0);
const currentValue = allHoldings.reduce((sum, stock) => sum + stock.price * stock.qty, 0);
const totalPnL = currentValue - totalInvestment;
const pnlPercent = ((totalPnL / totalInvestment) * 100).toFixed(2);


  const labels = allHoldings.map((subArray) => subArray["name"]);
  const data = {
    labels,
    datasets: [
      {
        label: 'Stock Price',
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: 'rgba(53, 162, 235, 0.88)',
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tbody>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profitClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";
              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

<div className="row">
  <div className="col">
    <h5>₹{totalInvestment.toFixed(2)}</h5>
    <p>Total investment</p>
  </div>
  <div className="col">
    <h5>₹{currentValue.toFixed(2)}</h5>
    <p>Current value</p>
  </div>
  <div className="col">
    <h5 className={totalPnL >= 0 ? "profit" : "loss"}>
      {totalPnL.toFixed(2)} ({pnlPercent}%)
    </h5>
    <p>P&L</p>
  </div>
</div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
