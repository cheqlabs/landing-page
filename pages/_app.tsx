import { ChakraProvider } from '@chakra-ui/react';

import customTheme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme} resetCSS={true}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;