import { Box, Heading, Flex, Image, Text } from '@chakra-ui/core';
import Layout from './components/Layout';

// Chakra UI default breakpoints are set as "min-width" array values in Chakra theme
// breakpoints: ["30em", "48em", "62em", "80em"],
// You can set style values to every breakpoint
function HomePage() {
  return (
    <Layout>
      <Flex flexDirection={['column', 'column', 'column', 'row']}>
        <Flex alignItems="start" ml={[0, 0, 0, '-20%']}>
          <Image
            maxW={['auto', 'auto', 'auto', '52em']}
            src="https://images.unsplash.com/photo-1498747324273-943f73ca00b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
          />
        </Flex>
        <Flex flexDirection="column" m={8}>
          <Flex alignItems="center" h={['auto', 'auto', 'auto', '32em']}>
            <Heading>
              Build your landing page with{' '}
              <Text color="brand.300" as="span">
                NextJs
              </Text>
              ,{' '}
              <Text color="brand.300" as="span">
                Chakra UI
              </Text>{' '}
              and{' '}
              <Text color="brand.300" as="span">
                TypeScript
              </Text>
            </Heading>
          </Flex>
          <Box mb={8}>
            <Heading mb={8}>NextJs</Heading>
            <Text>
              Enter Next.js, the React Framework. Next.js provides a solution to all of the above
              problems. But more importantly, it puts you and your team in the pit of success when
              building React applications.
            </Text>
          </Box>
          <Box mb={8}>
            <Heading mb={8}>Chakra UI</Heading>
            <Text>
              Build accessible React apps & websites with speed Chakra UI is a simple, modular and
              accessible component library that gives you all the building blocks you need to build
              your React applications.
            </Text>
          </Box>
          <Box mb={8}>
            <Heading mb={8}>TypeScript</Heading>
            <Text>
              JavaScript that scales. TypeScript is a typed superset of JavaScript that compiles to
              plain JavaScript. Any browser. Any host. Any OS. Open source.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
}

export default HomePage;