import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
} 

const fonts = {
  heading: "'DM Sans', sans-serif",
  body: "'DM Sans', sans-serif",
}

const customTheme = extendTheme({ config, fonts });

export default customTheme;