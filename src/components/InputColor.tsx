import React, { useState } from "react";

const InputColor = () => {
  const [color, setColor] = useState("#054080");
  return (
    <div>
      <label className="font-semibold text-md">Color</label>
      <div className="flex items-center gap-2">
        <div
          style={{ background: color }}
          className="w-10 h-8 cursor-pointer border-4"
        ></div>
      </div>
    </div>
  );
};

export default InputColor;
