import React from 'react';
import { Text as RNText } from 'react-native';

export default function ({ type = 'regular', size: fontSize = 14, ...props }) {
  function getFontFamily(type) {
    switch (type) {
      case 'demibold':
        return 'AvenirNext-DemiBold';
      case 'medium':
        return 'AvenirNext-Medium';
      case 'regular':
        return 'AvenirNext-Regular';
    }
  }

  const fontFamily = getFontFamily(type);
  const style = [{ fontFamily, fontSize }, props.style];
  const allProps = { ...props, style };

  return <RNText {...allProps}>{props.children}</RNText>;
}
