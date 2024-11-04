import * as React from "react";
import Svg, { Path } from "react-native-svg";

export function LeftArrowIcon(props: any) {
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
        d="M15.5 19.5a1 1 0 01-1.414 0L8.086 13.5a1.5 1.5 0 010-2.121l6-6a1 1 0 111.414 1.414L10.914 12l5.086 5.086a1 1 0 010 1.414z"
        fill="#999"
      />
    </Svg>
  );
}
