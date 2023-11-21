import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props?: SVGProps<SVGSVGElement>) => (
  <defs xmlns="http://www.w3.org/2000/svg">
    <filter
      id="filter0_d_0_1"
      x={63.5}
      y={111.936}
      width={103.783}
      height={73.1279}
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity={0} result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy={4} />
      <feGaussianBlur stdDeviation={2} />
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
  </defs>
);
export default SvgComponent;
