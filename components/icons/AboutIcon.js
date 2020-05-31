import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function AboutIcon(props) {
  return (
    <Svg width={25} height={25} viewBox="0 0 25 25" {...props}>
      <G fill="#AA1F24" fillRule="evenodd">
        <Path
          d="M24.687 4.765l-.998-.383a9.092 9.092 0 01-3.735-2.677A4.712 4.712 0 0016.316 0a4.75 4.75 0 00-3.412 1.454l-.408.425-.408-.425A4.75 4.75 0 008.676 0a4.712 4.712 0 00-3.638 1.705 9.092 9.092 0 01-3.734 2.677l-.999.383c-.424.163-.4.79.038.92l.031.008c.005 0 .01.002.014.003l.03.004.016.002.028.002H.48c.76 0 1.6.694 2.66 1.571.48.396 1.023.844 1.624 1.28a.49.49 0 00.682-.107.485.485 0 00-.107-.68c-.577-.417-1.084-.836-1.574-1.241-.565-.467-1.074-.888-1.57-1.204 1.466-.266 3.67-.478 5.324.181 2.303.918 4.06 1.019 4.723 1.019h.012c.662 0 2.42-.101 4.723-1.019 1.806-.72 4.266-.4 5.707-.108-.46.307-.935.7-1.456 1.13-1.654 1.367-3.711 3.067-7.066 3.505a.487.487 0 10.127.965c3.635-.475 5.905-2.351 7.563-3.721 1.061-.877 1.9-1.57 2.66-1.57a.486.486 0 00.175-.94zM16.614 4.6c-1.895.755-3.398.914-4.115.943h-.502c-.717-.028-2.22-.188-4.115-.943-1.252-.499-2.732-.567-4.048-.473a10.04 10.04 0 001.957-1.803A3.736 3.736 0 018.676.973c1.017 0 2.003.42 2.706 1.152l.76.794a.49.49 0 00.707 0l.761-.794A3.767 3.767 0 0116.316.973c1.12 0 2.171.493 2.885 1.352.589.71 1.274 1.334 2.031 1.855-1.445-.157-3.181-.152-4.618.421z"
          fillRule="nonzero"
        />
        <Path d="M12.505 10h-.012a.496.496 0 00-.493.5.5.5 0 00.497.5h.008a.497.497 0 00.495-.5c0-.276-.222-.5-.495-.5z" />
        <Path
          d="M12.053 15.492v-2.185a.992.992 0 00-.632-.908V9.338c0-.55-.32-1.051-.833-1.31l-1.684-.85a1.65 1.65 0 00-1.557.035c-.481.27-.768.748-.768 1.275V12.4a.992.992 0 00-.632.908v2.185c-.53.05-.947.473-.947.986v7.036C5 24.334 5.708 25 6.579 25h4.842c.87 0 1.579-.667 1.579-1.486v-7.036c0-.513-.416-.936-.947-.986zM7.632 8.488c0-.253.179-.382.256-.425a.546.546 0 01.518-.012l1.685.85a.491.491 0 01.277.437v2.978H7.632V8.488zM7 13.307h4v2.18H7v-2.18zm4.947 10.207c0 .273-.236.495-.526.495h-.947v-3.766c0-.273-.236-.495-.527-.495-.29 0-.526.222-.526.495v3.766H6.58c-.29 0-.526-.222-.526-.495v-7.036h5.894v7.036z"
          fillRule="nonzero"
        />
        <Path d="M9.853 18.146a.504.504 0 00-.707 0 .504.504 0 000 .707.504.504 0 00.707 0 .504.504 0 000-.707z" />
      </G>
    </Svg>
  );
}

export default AboutIcon;
