import React from "react";

export const DropDown = () => {
return (
<div className="ml-20 flex">
<select className="text-xs text-white bg-red-800 w-32 p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
  <option value="">Publication Year</option>
  <option value="option1">2024</option>
  <option value="option2">2023</option>
  <option value="option3">2022</option>
  <option value="option4">2021</option>
  <option value="option5">2020</option>
  <option value="option6">2019</option>
  <option value="option7">2018</option>
  <option value="option8">2017</option>
</select>
<select className="text-xs text-white bg-red-800 w-32 p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 ml-4">
  <option value="">Language / Dialect</option>
  <option value="option1">English</option>
  <option value="option2">Tagalog</option>
</select>
<select className="text-xs text-white bg-red-800 w-32 p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 ml-4">
  <option value="">Sustainable Development Goals</option>
  <option value="option1">SDG 1</option>
  <option value="option2">SDG 2</option>
  <option value="option3">SDG 3</option>
  <option value="option4">SDG 4</option>
  <option value="option5">SDG 5</option>
  <option value="option6">SDG 6</option>
  <option value="option7">SDG 7</option>
  <option value="option8">SDG 8</option>
  <option value="option9">SDG 9</option>
  <option value="option10">SDG 10</option>
  <option value="option11">SDG 11</option>
  <option value="option12">SDG 12</option>
  <option value="option13">SDG 13</option>
  <option value="option14">SDG 14</option>
  <option value="option15">SDG 15</option>
  <option value="option16">SDG 16</option>
  <option value="option17">SDG 17</option>
</select>
<select className="text-xs text-white bg-red-800 w-32 p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 ml-4">
  <option value="">Type</option>
  <option value="option1">Article</option>
  <option value="option2">Conference contribution</option>
  <option value="option3">Review Article</option>
  <option value="option4">Paper</option>
</select>
<select className="text-xs text-white bg-red-800 w-32 p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 ml-4">
  <option value="">Research Unit / Center</option>
  <option value="option1">Pablo Borbon</option>
  <option value="option2">STEER Hub</option>
  <option value="option3">KIST Park</option>
  <option value="option4">VIP Corals</option>
</select>
</div>
    );
};

export default DropDown;