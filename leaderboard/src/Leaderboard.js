import React, { useState } from 'react';
import './Leaderboard.css';
import { MdOutlineTrendingUp, MdOutlineTrendingDown } from 'react-icons/md';

const Leaderboard = () => {
  const [data, setData] = useState([
    { rankname: 'John Doe', calmarratio: '2.5', calmarTrend: 'up', overprofit: '150%', avgDailyProfit: '1.5%', winPercentage: '75%', price: '1000', action: '' },
    { rankname: 'Jane Smith', calmarratio: '2.1', calmarTrend: 'down', overprofit: '120%', avgDailyProfit: '1.2%', winPercentage: '70%', price: '900', action: '' },
    { rankname: 'Alice Johnson', calmarratio: '3.0', calmarTrend: 'up', overprofit: '200%', avgDailyProfit: '2.0%', winPercentage: '80%', price: '1200', action: '' },
  { rankname: 'Bob Brown', calmarratio: '1.8', calmarTrend: 'down', overprofit: '90%', avgDailyProfit: '0.9%', winPercentage: '60%', price: '800', action: '' },
  { rankname: 'Charlie Davis', calmarratio: '2.2', calmarTrend: 'up', overprofit: '130%', avgDailyProfit: '1.3%', winPercentage: '65%', price: '950', action: '' },
  { rankname: 'David Evans', calmarratio: '2.4', calmarTrend: 'up', overprofit: '140%', avgDailyProfit: '1.4%', winPercentage: '72%', price: '1100', action: '' },
  { rankname: 'Eve Foster', calmarratio: '2.7', calmarTrend: 'down', overprofit: '170%', avgDailyProfit: '1.7%', winPercentage: '78%', price: '1050', action: '' },
  { rankname: 'Frank Green', calmarratio: '1.9', calmarTrend: 'down', overprofit: '100%', avgDailyProfit: '1.0%', winPercentage: '68%', price: '850', action: '' },
  { rankname: 'Grace Harris', calmarratio: '2.6', calmarTrend: 'up', overprofit: '160%', avgDailyProfit: '1.6%', winPercentage: '76%', price: '1020', action: '' },
  { rankname: 'Hank Ives', calmarratio: '2.3', calmarTrend: 'down', overprofit: '135%', avgDailyProfit: '1.35%', winPercentage: '67%', price: '970', action: '' },
  ]);

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    const updatedData = [...data];
    updatedData[index].action = value;
    setData(updatedData);
  };

  const handleMouseEnter = (index) => {
    // Add logic for row highlighting when mouse enters
    console.log("Mouse enter row", index);
  };

  const handleMouseLeave = (index) => {
    // Add logic for removing row highlighting when mouse leaves
    console.log("Mouse leave row", index);
  };

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <h1>Basic Backtest</h1>
        <div className="slippage-container">
          <label htmlFor="slippage" className="slippage-label">Slippage</label>
          <select id="slippage" className="slippage-dropdown">
            <option value="1.0">1.0</option>
            <option value="1.5">1.5</option>
            <option value="0.5">0.5</option>
          </select>
        </div>
      </div>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Rank Name</th>
            <th>Calmar Ratio</th>
            <th>Over Profit</th>
            <th>Avg. Daily Profit</th>
            <th>Win% (Day)</th>
            <th>Price (Rs)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="leaderboard-row" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>
              <td><div className="rank-circle">{index + 1}</div></td>
              <td>{row.rankname}</td>
              <td>
                {row.calmarTrend === 'up' ? <MdOutlineTrendingUp size={24} style={{ color: 'green', marginRight: '5px' }} /> : <MdOutlineTrendingDown size={24} style={{ color: 'red', marginRight: '5px' }} />}
                {row.calmarratio}
              </td>
              <td>{row.overprofit}</td>
              <td>{row.avgDailyProfit}</td>
              <td>{row.winPercentage}</td>
              <td>{row.price}</td>
              <td>
                <a href="#" className="view-action-link" onClick={(event) => handleInputChange(event, index)}>View/Action</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
