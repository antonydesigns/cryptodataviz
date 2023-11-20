import React, { useRef, useState, useEffect } from "react";

export default function Box() {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  // Function to update box position based on screen size
  const updatePosition = () => {
    const canvas = canvasRef.current;
    const box = boxRef.current;
    if (canvas && box) {
      const canvasWidth = canvas.clientWidth;
      const canvasHeight = canvas.clientHeight;
      const newX = (position.x / 100) * canvasWidth;
      const newY = (position.y / 100) * canvasHeight;
      setPosition({ x: newX, y: newY });
    }
  };

  useEffect(() => {
    // Update box position initially and when the screen is resized
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  const handleMouseDown = (e: any) => {
    setIsDragging(true);
    setStartPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: any) => {
    if (!isDragging) return;

    const newPosition = {
      x: e.clientX - startPosition.x,
      y: e.clientY - startPosition.y,
    };

    setPosition(newPosition);
  };

  return (
    <div
      ref={canvasRef}
      className="border border-black"
      style={{ width: "100%", height: "100vh", position: "relative" }}
    >
      {canvasRef.current && (
        <div
          ref={boxRef}
          style={{
            width: "10%",
            paddingBottom: "10%",
            backgroundColor: "blue",
            position: "absolute",
            top: `${(position.y * 100) / canvasRef.current.clientHeight}%`,
            left: `${(position.x * 100) / canvasRef.current.clientWidth}%`,
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        ></div>
      )}
    </div>
  );
}
