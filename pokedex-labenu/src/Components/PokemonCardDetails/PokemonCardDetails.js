import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

function PokemonCardDetails() {
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '1040px' }}
        height={{ sm: '576px', md: '30rem' }}
        bg={useColorModeValue('grey', 'gray.900')}
        boxShadow={'2xl'}
        padding={2}
        display='flex'
        flexDir={{ base: 'column', md: 'row' }}
        justifyContent='space-evenly'
        alignItems='center'
      >
        <Flex
          mt={'1rem'}
          flex={1}
          flexDir={"column"}
          m={3}
        >
          <Image
            objectFit="cover"
            boxSize="100%"
            maxH={"12rem"}
            minW='12rem'
            src={
              'https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg'
            }
            my={4}
            borderRadius={'5px'}
            overflow={'hidden'}
          />
          <Image
            objectFit="cover"
            boxSize="100%"
            maxH={"12rem"}
            borderRadius={'5px'}
            overflow={'hidden'}
            src={
              'https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg'
            }
            my={2}
          />
        </Flex>
        <Stack
          mt={'1rem'}
          flex={1}
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          p={2}
          pt={2}
          backgroundColor='white'
          borderRadius='12px'
          minH={'520px'}
        >
          <Heading
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            Base Status
          </Heading>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
          >
            Actress, musician, songwriter and artist. PM for work inquires or
            me in your posts
          </Text>
        </Stack>
        <Stack
          mt={'1rem'}
          flex={1}
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          minH={'520px'}
          px={6}
        >
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Pokemon Nome
          </Heading>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
            backgroundColor='white'
            borderRadius='12px'
            minH={'330px'}
          >
            Actress, musician, songwriter and artist. PM for work inquires or
            me in your posts
          </Text>
        </Stack>

      </Stack>
    </Center>
  );
}

export default PokemonCardDetails