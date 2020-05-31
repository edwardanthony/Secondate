import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function CartIconOutline(props) {
  return (
    <Svg width={22} height={19} viewBox="0 0 22 19" {...props}>
      <G fill="#AA1F24" fillRule="nonzero">
        <Path d="M7.088 12.5h11.689c.288 0 .541-.185.62-.453l2.578-8.75a.61.61 0 00-.105-.548.652.652 0 00-.514-.249H5.602L5.14.49a.64.64 0 00-.63-.49H.646A.635.635 0 000 .625c0 .345.289.625.645.625h3.35l2.327 10.155a1.877 1.877 0 00-1.166 1.72c0 1.034.868 1.875 1.934 1.875h11.687c.356 0 .645-.28.645-.625a.635.635 0 00-.645-.625H7.09a.636.636 0 01-.645-.625c0-.344.289-.624.643-.625zm13.413-8.75l-2.21 7.5H7.607l-1.719-7.5h14.613zM6 17c0 1.103.897 2 2 2s2-.897 2-2-.897-2-2-2-2 .897-2 2zm2-.667a.668.668 0 11-.002 1.335A.668.668 0 018 16.333zM16 17c0 1.103.897 2 2 2s2-.897 2-2-.897-2-2-2-2 .897-2 2zm2-.667a.668.668 0 11-.002 1.335.668.668 0 01.002-1.335z" />
      </G>
    </Svg>
  );
}

export default CartIconOutline;
