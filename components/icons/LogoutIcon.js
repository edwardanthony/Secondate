import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function LogoutIcon(props) {
  return (
    <Svg width={23} height={25} viewBox="0 0 23 25" {...props}>
      <G fill="#AA1F24" fillRule="evenodd">
        <Path d="M18.902 6.126a.942.942 0 00-1.332 1.332 9.094 9.094 0 012.681 6.474 9.093 9.093 0 01-2.681 6.472 9.122 9.122 0 01-6.472 2.677 9.127 9.127 0 01-6.473-2.677c-3.569-3.569-3.568-9.375 0-12.944a.942.942 0 10-1.332-1.333c-4.304 4.304-4.304 11.306 0 15.61a11.004 11.004 0 007.805 3.227c2.826 0 5.653-1.076 7.805-3.227a10.966 10.966 0 003.232-7.805c0-2.949-1.148-5.721-3.233-7.806z" />
        <Path d="M11.097 12.207c.52 0 .942-.422.942-.943V.942a.942.942 0 10-1.884 0v10.322c0 .52.422.943.942.943z" />
      </G>
    </Svg>
  );
}

export default LogoutIcon;
