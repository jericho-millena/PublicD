"use client";

import React from "react";
import dynamic from "next/dynamic";
import { BarChart, Bar, XAxis, Tooltip } from "recharts";

const data = [
  {
    name: "Pablo Borbon",
    "Research Paper": 4000,
    Projects: 2400,
    Activities: 2000,
    amt: 2400,
  },
  {
    name: "Alangilan",
    "Research Paper": 3000,
    Projects: 1398,
    Activities: 2200,
    amt: 2210,
  },
  {
    name: "Nasugbu",
    "Research Paper": 2000,
    Projects: 9800,
    Activities: 1550,
    amt: 2290,
  },
  {
    name: "Malvar",
    "Research Paper": 2780,
    Projects: 3908,
    Activities: 1600,
    amt: 2000,
  },
  {
    name: "Lipa",
    "Research Paper": 1890,
    Projects: 4800,
    Activities: 3200,
    amt: 2181,
  },
  {
    name: "Lemery",
    "Research Paper": 2390,
    Projects: 3800,
    Activities: 1240,
    amt: 2500,
  },
  {
    name: "Balayan",
    "Research Paper": 3490,
    Projects: 4300,
    Activities: 3250,
    amt: 2100,
  },
  {
    name: "Lobo",
    "Research Paper": 2390,
    Projects: 3800,
    Activities: 1200,
    amt: 2500,
  },
  {
    name: "Rosario",
    "Research Paper": 2780,
    Projects: 3908,
    Activities: 1600,
    amt: 2000,
  },
  {
    name: "San Juan",
    "Research Paper": 3000,
    Projects: 1398,
    Activities: 1600,
    amt: 2210,
  },
];

const BarGraph = () => {
  return (
    <div className="flex justify-center pt-8">
      <BarChart
        width={1300}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 20,
          left: 20,
          bottom: 10,
        }}
      >
        <XAxis
          dataKey="name"
          tickLine="false"
          stroke="#9b2c2c"
          strokeWidth={5}
        />
        <Tooltip />
        <Bar dataKey="Projects" fill="#9b2c2c" barSize={27} />
        <Bar dataKey="Research Paper" fill="#dc2626" barSize={27} />
        <Bar dataKey="Activities" fill="#f87171" barSize={27} />
      </BarChart>
    </div>
  );
};

export default dynamic(() => Promise.resolve(BarGraph), { ssr: false });
