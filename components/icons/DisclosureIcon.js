import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function DisclosureIcon(props) {
  return (
    <Svg width={8} height={15} viewBox="0 0 8 15" {...props}>
      <Path
        d="M7.82 7.058L1.05.183a.608.608 0 00-.87 0 .631.631 0 000 .884L6.514 7.5.18 13.933a.631.631 0 000 .884.609.609 0 00.87 0l6.77-6.875a.631.631 0 000-.884z"
        fill="#B2B2B2"
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default DisclosureIcon;
