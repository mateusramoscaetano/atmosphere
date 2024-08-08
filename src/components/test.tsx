"use client";
import React from "react";
import MagneticItem from "./magnetic-item";

const Test: React.FC = () => {
  return (
    <div
      className="w-full"
      style={{
        margin: 0,
        overflow: "hidden",
        backgroundColor: "#f0f0f0",
        height: "100vh",
        position: "relative",
        zIndex: 10,
      }}
    >
      <MagneticItem top={100} left={100} />
      <MagneticItem top={200} left={300} />
      <MagneticItem top={300} left={500} />
    </div>
  );
};

export default Test;
