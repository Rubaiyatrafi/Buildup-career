import React from "react";
import "./Statistics.css";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      name: "Assignment-1",
      Total: 60,
      marks: 57,
      amt: 57,
    },
    {
      name: "Assignment-2",
      Total: 60,
      marks: 54,
      amt: 54,
    },
    {
      name: "Assignment-3",
      Total: 60,
      marks: 56,
      amt: 56,
    },
    {
      name: "Assignment-4",
      Total: 60,
      marks: 55,
      amt: 55,
    },
    {
      name: "Assignment-5",
      Total: 60,
      marks: 52,
      amt: 52,
    },
    {
      name: "Assignment-6",
      Total: 60,
      marks: 56,
      amt: 56,
    },
    {
      name: "Assignment-7",
      Total: 60,
      marks: 60,
      amt: 60,
    },
    {
      name: "Assignment-8",
      Total: 60,
      marks: 56,
      amt: 56,
    },
  ];
  return (
    <div className="chart-container">
      <div>
        <div className="chart">
          <h1 className="chart-text">
            Marks Statistics showing in Tooltip BarChart.
          </h1>
        </div>
        <div className="chart">
          <BarChart
            width={800}
            height={500}
            data={data}
            margin={{ top: 50, right: 30, left: 30, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey={"marks"} barSize={30} fill="pink" />
          </BarChart>
        </div>
      </div>
      <div>
        <div className="chart">
          <h1 className="chart-text">
            Marks Statistics showing in ComposedChart.
          </h1>
        </div>
        <div className="chart">
          <ComposedChart
            width={800}
            height={500}
            data={data}
            margin={{ top: 50, right: 30, left: 30, bottom: 5 }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="amt"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="marks" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="Total" stroke="#ff7300" />
          </ComposedChart>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
