// components/PapersChart.js
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { curveCardinal } from 'd3-shape';

// Data for the chart with months instead of pages
const data = [
  { name: 'January', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'February', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'March', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'April', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'June', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'July', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'August', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'September', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'October', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'November', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'December', uv: 1, pv: 1, amt: 1 }
];

// Cardinal curve for smooth chart lines
const cardinal = curveCardinal.tension(0.2);

export default class PapersChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/area-chart-different-shapes-6lwnhy';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          
          {/* Custom Legend with colored boxes */}
          <Legend
            verticalAlign="top"
            iconType="square"  // Use square for box-shaped legends
            payload={[
              {
                value: 'Download',
                type: 'line',
                color: '#ff0000',
                // Customizing the legend box for "Download"
                iconSize: 20,
                formatter: () => (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: '#ff0000',
                        borderRadius: '2px', // Square box
                        marginRight: '8px', // Space between box and label
                      }}
                    />
                    <span>Download</span> {/* Label directly beside the colored box */}
                  </div>
                ),
              },
              {
                value: 'Views',
                type: 'line',
                color: '#808080',
                // Customizing the legend box for "Views"
                iconSize: 20,
                formatter: () => (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: '#808080',
                        borderRadius: '2px', // Square box
                        marginRight: '8px', // Space between box and label
                      }}
                    />
                    <span>Views</span> {/* Label directly beside the colored box */}
                  </div>
                ),
              },
            ]}
          />
          
          <Area type="monotone" dataKey="pv" stroke="#808080" fill="#808080" fillOpacity={0.3} />
          <Area type={cardinal} dataKey="uv" stroke="#ff0000" fill="#ff0000" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
