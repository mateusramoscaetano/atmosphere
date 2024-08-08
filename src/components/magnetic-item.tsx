"use client";
import React, { useEffect, useRef } from "react";

interface MagneticItemProps {
  top: number;
  left: number;
}

const MagneticItem: React.FC<MagneticItemProps> = ({ top, left }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (itemRef.current) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const rect = itemRef.current.getBoundingClientRect();
        const itemX = rect.left + rect.width / 2;
        const itemY = rect.top + rect.height / 2;

        const dx = mouseX - itemX;
        const dy = mouseY - itemY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const maxDistance = 150;

        if (distance < maxDistance) {
          const strength = (maxDistance - distance) / maxDistance;
          const offsetX = dx * strength;
          const offsetY = dy * strength;

          itemRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        } else {
          itemRef.current.style.transform = "translate(0, 0)";
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="text-white"
      ref={itemRef}
      style={{
        position: "absolute",
        width: "50px",
        height: "50px",
        backgroundColor: "#3498db",
        borderRadius: "50%",
        top: `${top}px`,
        left: `${left}px`,
        pointerEvents: "none",
        transition: "transform 0.2s ease-out",
      }}
    >
      alo
    </div>
  );
};

export default MagneticItem;
