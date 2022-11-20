import React from "react";

function BlubDivider() {
  return (
    <div className="container grid grid-cols-[1fr_auto_1fr] items-center gap-6">
      <div className="h-[1px] w-full bg-primary"></div>
      <img src="images/idea-bulb.png" className="max-w-[43px]" alt="" />
      <div className="h-[1px] w-full bg-primary"></div>
    </div>
  );
}

export default BlubDivider;
