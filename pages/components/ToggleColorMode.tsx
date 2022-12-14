import { Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      onClick={() => toggleColorMode()}
      pos='absolute'
      top='0'
      right='0'
      m='1rem'
      variant='ghost'
    >
      {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}

export default ToggleColorMode;
