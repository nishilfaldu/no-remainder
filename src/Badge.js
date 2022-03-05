import React from "react";
import { BadgeFiguresCard } from "react-sensei";


function Badge() {
  const items = [
    {
      label: "Total",
      value: "1.14b",
    },
    {
      label: "Avg",
      value: "16.22",
    },
    {
      label: "Target",
      value: 15.44,
    },
  ];
  
  return (
    <div><BadgeFiguresCard items={items} /></div>
   

  );
}

export default Badge;
