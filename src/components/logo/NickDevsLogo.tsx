import React from "react";

export interface IconSvgProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

export const NickDevsDarkLogo: React.FC<IconSvgProps> = ({
  width = 220,
  height = 60,
  ...props
}) => (
  <svg
    aria-label="NickDevs Logo"
    height={height}
    width={width}
    viewBox="0 0 220 60"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      height="45"
      rx="5"
      width="215"
      x="-8"
      y="5"
      fill="none"
      stroke="#fff"
      strokeWidth="3"
    />
    <text x="0" y="40" fill="#fff" fontSize="36" fontWeight="bold">
      NICK
    </text>
    <rect fill="#fff" height="45" rx="3" width="115" x="93" y="5" />
    <text x="100" y="40" fill="#000" fontSize="36" fontWeight="bold">
      DEVS
    </text>
  </svg>
);

export const NickDevsLightLogo: React.FC<IconSvgProps> = ({
  width = 220,
  height = 60,
  ...props
}) => (
  <svg
    aria-label="NickDevs Logo"
    height={height}
    width={width}
    viewBox="0 0 220 60"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      height="45"
      rx="5"
      width="215"
      x="-8"
      y="5"
      fill="none"
      stroke="#000"
      strokeWidth="3"
    />
    <text x="0" y="40" fill="#000" fontSize="36" fontWeight="bold">
      NICK
    </text>
    <rect fill="#000" height="45" rx="5" width="115" x="93" y="5" />
    <text x="100" y="40" fill="#fff" fontSize="36" fontWeight="bold">
      DEVS
    </text>
  </svg>
);
