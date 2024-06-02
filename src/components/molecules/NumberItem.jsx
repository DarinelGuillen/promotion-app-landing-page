import React from 'react';

function NumberItem({ color, hoverColor, text }) {
  return (
    <div className={`p-4 ${color} rounded-3xl text-white flex-grow items-center justify-center h-64 transition-all duration-300 group-hover:${hoverColor}`}>
      <div className="text-center">
        <p className="font-bold text-5xl">{text}</p>
      </div>
    </div>
  );
}

export default NumberItem;
