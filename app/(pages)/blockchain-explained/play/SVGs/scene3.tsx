import React from "react";
import { motion } from "framer-motion";

export default function SVG_Scene3() {
  const duration = 1;
  return (
    <svg
      viewBox="0 0 638 338"
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <rect width="638" height="338" fill="#F5F5F5" opacity={0} />
      <g id="scene 3">
        <rect width="638" height="338" fill="white" opacity={0} />
        <g id="transaction">
          <g id="candy1">
            <path
              id="Union"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M266.214 203.995L230.058 229.426L233.709 213.316L215.553 207.1L226.106 188.974L211.239 177.112L224.256 166.262L209.39 154.4L250.315 153.267C251.718 145.656 254.707 138.21 259.373 131.419C277.149 105.546 312.534 98.9835 338.406 116.76C340.389 118.123 342.259 119.589 344.013 121.146L379.983 95.8452L375.223 113.862L394.398 118.543L384.549 135.46L397.128 145.497L390.502 156.878L405.242 168.64L362.587 170.988C361.464 179.621 358.333 188.125 353.065 195.793C335.288 221.665 299.904 228.228 274.032 210.452C271.191 208.5 268.583 206.336 266.214 203.995Z"
              fill="#FF3636"
            />
            <path
              id="Ellipse 2"
              d="M354.226 165.795C359.156 176.821 358.238 194.186 329.315 207.12C300.393 220.054 277.558 208.484 272.627 197.459C267.697 186.433 291.592 203.72 320.514 190.786C349.437 177.852 349.295 154.77 354.226 165.795Z"
              fill="#C73030"
            />
            <path
              id="Vector 1"
              d="M397.454 165.515C389.779 165.834 374.763 167.072 362.485 167.582L358.919 148.358L369.203 144.241L382.493 138.462L393.888 146.291L386.059 157.686L397.454 165.515Z"
              fill="#C73030"
              stroke="#C73030"
            />
            <path
              id="Vector 2"
              d="M237.734 221.653C236.732 222.207 240.581 219.137 263.995 202.421L254.099 178.847L228.389 189.139L218.346 206.469L234.883 212.239L232.988 225.848L237.734 221.653Z"
              fill="#C73030"
              stroke="#C73030"
            />
            <path
              id="Star 4"
              d="M282.768 115.419L296.553 124.633L313.38 115.205L303.537 129.53L332.176 141.166L297.837 138.376L279.809 168.555L287.329 138.945L261.842 143.163L286.535 130.452L282.768 115.419Z"
              fill="#FF7575"
            />
          </g>
        </g>
        <path
          id="Subtract"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M305.5 307C404.083 307 484 242.629 484 163.223C484 83.8178 404.083 19.4468 305.5 19.4468C206.917 19.4468 127 83.8178 127 163.223C127 242.629 206.917 307 305.5 307ZM305.5 287.468C390.299 287.468 459.043 232.085 459.043 163.766C459.043 95.4472 390.299 40.0638 305.5 40.0638C220.701 40.0638 151.957 95.4472 151.957 163.766C151.957 232.085 220.701 287.468 305.5 287.468Z"
          fill="#CE0E0E"
        />
        <motion.rect
          animate={{
            height: [0, 362.238, 362.238],
          }}
          transition={{
            duration: duration,
          }}
          id="crossout"
          x="436.929"
          y="23.4188"
          width="16"
          height="362.238"
          transform="rotate(38 426 -23.4188)"
          fill="#CE0E0E"
        />
      </g>
    </svg>
  );
}
