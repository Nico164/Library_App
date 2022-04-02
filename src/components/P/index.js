import * as React from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';

export function P({
    children,
    fontType = 'Regular',
    fontSize = 16,
    ...props
}) {
  const [loaded] = useFonts({
    NotoSansBold: require('../../assets/fonts/NotoSans-Bold.ttf'),
    NotoSansBoldItalic: require('../../assets/fonts/NotoSans-BoldItalic.ttf'),
    NotoSansItalic: require('../../assets/fonts/NotoSans-Italic.ttf'),
    NotoSansRegular: require('../../assets/fonts/NotoSans-Regular.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <Text style={{ fontFamily: "NotoSans"+fontType, fontSize, ...props}} >{children}</Text>
  );
}