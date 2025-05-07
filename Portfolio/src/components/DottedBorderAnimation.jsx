import React from "react";

const DottedBorderAnimation = ({ width = "650", height = "850" }) => {
  return (
    <div className="relative">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="absolute right-[-160px] top-[-80px]" // Ensures it's centered
        style={{ background: "transparent" }}
      >
        <path
          d={`M${width * 0.15},${height * 0.17} 
             C${width * 0.25},${height * 0.25} ${width * 0.35},${
            height * 0.1
          } ${width * 0.5},${height * 0.1} 
             C${width * 0.65},${height * 0.1} ${width * 0.75},${
            height * 0.25
          } ${width * 0.75},${height * 0.33} 
                C${width * 0.75},${height * 0.4} ${width * 0.65},${
            height * 0.5
          } ${width * 0.5},${height * 0.5} 
                C${width * 0.35},${height * 0.5} ${width * 0.25},${
            height * 0.4
          } ${width * 0.25},${height * 0.33} 
        C${width * 0.25},${height * 0.25} ${width * 0.15},${height * 0.1} ${
            width * 0.5
          },${height * 0.1}`}
          fill="none"
          stroke="rgba(125,113,94,1)"
          strokeWidth="2"
          strokeDasharray="6,14"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-80"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};

export default DottedBorderAnimation;
