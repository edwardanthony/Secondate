import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function CartIconFill(props) {
  return (
    <Svg width={22} height={19} viewBox="0 0 22 19" {...props}>
      <G fill="#AA1F24" fillRule="evenodd">
        <Path d="M7.133 12.5h11.644a.64.64 0 00.62-.453l2.578-8.75a.61.61 0 00-.104-.548.653.653 0 00-.515-.249H5.645L5.185.49a.64.64 0 00-.63-.49H.645A.635.635 0 000 .625c0 .346.288.625.645.625h3.392l2.328 10.156c-.685.289-1.166.95-1.166 1.719C5.2 14.159 6.067 15 7.133 15h11.644c.357 0 .645-.28.645-.625a.635.635 0 00-.645-.625H7.133a.636.636 0 01-.645-.625c0-.345.29-.625.645-.625zM6 17c0 1.103.897 2 2 2s2-.897 2-2-.897-2-2-2-2 .897-2 2zM16 17c0 1.103.897 2 2 2s2-.897 2-2-.897-2-2-2-2 .897-2 2z" />
      </G>
    </Svg>
  );
}

export default CartIconFill;
