import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Data for the chart
const data = [
  { name: "January", downloads: 4000, views: 2400 },
  { name: "February", downloads: 3000, views: 1398 },
  { name: "March", downloads: 2000, views: 9800 },
  { name: "April", downloads: 2780, views: 3908 },
  { name: "May", downloads: 1890, views: 4800 },
  { name: "June", downloads: 2390, views: 3800 },
  { name: "July", downloads: 3490, views: 4300 },
  { name: "August", downloads: 3490, views: 4300 },
  { name: "September", downloads: 3490, views: 4300 },
  { name: "October", downloads: 3490, views: 4300 },
  { name: "November", downloads: 3490, views: 4300 },
  { name: "December", downloads: 1, views: 1 },
];

export default class PapersChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 10,
          }}
        >
          <Tooltip />

          {/* Custom Legend */}
          <Legend
            verticalAlign="top"
            align="center"
            wrapperStyle={{
              fontSize: "12px",
              marginBottom: "10px",
            }}
            payload={[
              {
                value: "Downloads",
                type: "square",
                color: "#990000", // Red
              },
              {
                value: "Views",
                type: "square",
                color: "#004c6d", // Blue
              },
            ]}
          />

          {/* Areas with Pointed Lines */}
          <Area
            type="linear" // Ensures straight, pointed lines
            dataKey="downloads"
            stroke="#990000"
            fill="#990000"
            fillOpacity={0.8}
          />
          <Area
            type="linear" // Ensures straight, pointed lines
            dataKey="views"
            stroke="#004c6d"
            fill="#007b96"
            fillOpacity={0.8}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
