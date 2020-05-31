import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function HomeIconFill(props) {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" {...props}>
      <Path
        d="M21.409 9.569l-.001-.002L12.432.594A2.012 2.012 0 0011 0c-.54 0-1.05.21-1.432.593l-8.97 8.97-.01.009a2.028 2.028 0 00.004 2.86A2.014 2.014 0 002 13.026h.357v6.604A2.373 2.373 0 004.727 22h3.511a.645.645 0 00.645-.645v-5.177c0-.597.485-1.082 1.082-1.082h2.07c.597 0 1.082.485 1.082 1.082v5.177c0 .356.289.645.645.645h3.511a2.373 2.373 0 002.37-2.37v-6.604h.333a2.028 2.028 0 001.433-3.457z"
        fill="#AA1F24"
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default HomeIconFill;
