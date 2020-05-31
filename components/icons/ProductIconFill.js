import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function ProductIconFill(props) {
  return (
    <Svg width={13} height={23} viewBox="0 0 13 23" {...props}>
      <G fill="#AA1F24" fillRule="evenodd">
        <Path d="M1 7.603L1.344 21.1c.006.224.172.4.378.4h1.556c.206 0 .372-.176.378-.4L4 7.602a11.036 11.036 0 00-3 0zM4 7V5H1v2c.996-.15 2.005-.15 3 0zM1 3.214l.123.126c.078.08.122.189.122.303V4.5h2.51v-.857c0-.114.044-.223.122-.303L4 3.214l-.123-.125a.436.436 0 010-.606L4 2.357l-.123-.125a.432.432 0 01-.122-.303V1.5h-2.51v.429a.432.432 0 01-.122.303L1 2.357l.123.126a.436.436 0 010 .606L1 3.214z" />
        <Path d="M4.305 21.16c-.016.612-.487 1.092-1.071 1.092H1.766c-.585 0-1.055-.48-1.071-1.092L.373 9c-.125.025-.25.048-.373.078V23h5V9.077c-.124-.03-.248-.052-.372-.077l-.323 12.16zM11.5.183c0-.143-.246-.236-.401-.15L9.5.935V3h2V.183zM10 3.5h1v9h-1z" />
        <Path
          d="M8 13v9.6c0 .22.187.4.417.4h4.166c.23 0 .417-.18.417-.4V13H8zm4.167 9.2h-.834v-6.8h.834v6.8zm0-7.6h-.834v-.8h.834v.8z"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  );
}

export default ProductIconFill;
