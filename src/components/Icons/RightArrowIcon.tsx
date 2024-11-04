import * as React from "react";
import Svg, { Path } from "react-native-svg";

export function RightArrowIcon(props: any) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.5 4.5a1 1 0 011.414 0l6 6a1.5 1.5 0 010 2.121l-6 6a1 1 0 01-1.414-1.414L13.086 12 8.5 7.414A1 1 0 018.5 4.5z"
        fill="#999"
      />
    </Svg>
  );
}
