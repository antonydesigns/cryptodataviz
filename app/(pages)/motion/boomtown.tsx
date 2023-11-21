import React from "react";
import { motion } from "framer-motion";

export default function BoomTown() {
  return (
    <div className="SCENE w-[100%] md:w-[50%] ">
      <svg
        viewBox="0 0 300 265"
        style={{
          height: "100%",
          width: "100%",
          border: "1px solid black",
        }}
      >
        <g
          xmlns="http://www.w3.org/2000/svg"
          id="Frame 1"
          clip-path="url(#clip0_0_1)"
        >
          <rect width="258" height="265" opacity="0" />
          <motion.g
            initial={{
              y: 0,
            }}
            animate={{
              y: [-5, 0, -5, 0, -5, 0, -5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            }}
            transition={{
              repeat: 5,
              duration: 2,
            }}
            id="Object"
          >
            <motion.path
              initial={{
                y: 0,
                scale: 0,
                opacity: 0,
              }}
              animate={{
                y: [0, -10],
                scale: [1, 4, 1],
                opacity: [1, 0, 0, 0],
              }}
              transition={{
                repeat: 5,
                duration: 2,
              }}
              id="Explosion"
              d="M91.5002 135.689L96.2806 161.477L115.305 143.424L104.015 167.096L130.018 163.674L106.97 176.189L130.018 188.704L104.015 185.282L115.305 208.954L96.2806 190.902L91.5002 216.689L86.7198 190.902L67.6949 208.954L78.985 185.282L52.9824 188.704L76.0306 176.189L52.9824 163.674L78.985 167.096L67.6949 143.424L86.7198 161.477L91.5002 135.689Z"
              fill="#FFEE56"
            />
            <motion.g
              animate={{
                y: [0, -200, -200],
                opacity: [1, 1, 0.5, 0],
              }}
              transition={{
                repeat: 5,
                duration: 2,
              }}
              id="Smoke"
            >
              <ellipse
                id="Ellipse 1"
                cx="57.5002"
                cy="227.5"
                rx="28.5"
                ry="27.5"
                fill="#D9D9D9"
              />
              <ellipse
                id="Ellipse 2"
                cx="50.0002"
                cy="202.5"
                rx="18"
                ry="17.5"
                fill="#D9D9D9"
              />
              <ellipse
                id="Ellipse 3"
                cx="87.0002"
                cy="195.5"
                rx="22"
                ry="21.5"
                fill="#D9D9D9"
              />
              <ellipse
                id="Ellipse 6"
                cx="87.0002"
                cy="195.5"
                rx="22"
                ry="21.5"
                fill="#D9D9D9"
              />
              <ellipse
                id="Ellipse 4"
                cx="86.0002"
                cy="243.5"
                rx="18"
                ry="17.5"
                fill="#D9D9D9"
              />
              <ellipse
                id="Ellipse 5"
                cx="101.5"
                cy="226"
                rx="26.5"
                ry="26"
                fill="#D9D9D9"
              />
              <ellipse
                id="Ellipse 7"
                cx="122.5"
                cy="202"
                rx="26.5"
                ry="26"
                fill="#D9D9D9"
              />
              <ellipse
                id="Ellipse 8"
                cx="128"
                cy="238.5"
                rx="17"
                ry="16.5"
                fill="#D9D9D9"
              />
            </motion.g>
            <g id="Building">
              <rect
                id="Wall"
                x="25.0002"
                y="176"
                width="129"
                height="89"
                fill="#FF9669"
              />
              <path
                id="Door"
                d="M76.0002 218.96C76.0002 215.824 76.0002 214.255 76.6105 213.058C77.1474 212.004 78.0041 211.147 79.0578 210.61C80.2557 210 81.8239 210 84.9602 210H95.0402C98.1765 210 99.7446 210 100.943 210.61C101.996 211.147 102.853 212.004 103.39 213.058C104 214.255 104 215.824 104 218.96V265H76.0002V218.96Z"
                fill="#8C3B0E"
              />
              <motion.rect
                initial={{
                  fill: "#B4ECE9",
                }}
                animate={{
                  fill: ["#FFEE56", "#B4ECE9", "#B4ECE9", "#B4ECE9"],
                }}
                transition={{
                  repeat: 5,
                  repeatType: "loop",
                  duration: 2,
                }}
                id="LWindow"
                x="37.0002"
                y="191"
                width="28"
                height="26"
                fill="#B4ECE9"
              />
              <motion.rect
                initial={{
                  fill: "#B4ECE9",
                }}
                animate={{
                  fill: ["#FFEE56", "#B4ECE9", "#B4ECE9", "#B4ECE9"],
                }}
                transition={{
                  repeat: 5,
                  duration: 2,
                }}
                id="RWindow"
                x="115"
                y="191"
                width="28"
                height="26"
                fill="#B4ECE9"
              />
            </g>
            <motion.g
              initial={{
                rotate: 0,
              }}
              animate={{
                rotate: [0, 80, 70, 80, 0],
              }}
              transition={{
                repeat: 5,
                duration: 2,
              }}
              id="Roof"
            >
              <g id="Bone" filter="url(#filter0_d_0_1)">
                <rect
                  x="9"
                  y="76"
                  width="322"
                  height="200"
                  fill-opacity="0"
                  shape-rendering="crispEdges"
                />
              </g>
              <path
                id="The Roof"
                d="M89.5 76L170 176H9L89.5 76Z"
                fill="#F62C2C"
              />
            </motion.g>
          </motion.g>
        </g>
        <defs xmlns="http://www.w3.org/2000/svg">
          <filter
            id="filter0_d_0_1"
            x="5"
            y="76"
            width="330"
            height="208"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_0_1">
            <rect width="258" height="265" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
