import {
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';

function PokemonCardDetails(props) {




  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '1240px' }}
        height={{ sm: '1376px', md: '30rem' }}
        bg={useColorModeValue('grey', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}
        display='flex'
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent={'space-evenly'}
        alignItems='center'
      >
        <Flex
          flexDirection={{ base: 'column', sm: 'row', md: 'column' }}
        >
          <Image
            objectFit="cover"
            boxSize="100%"
            maxH={"12rem"}
            minW='12rem'
            src={
              'https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg'
            }
            m={2}
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
            m={2}
          />
        </Flex>
        <Stack
          mt={'1rem'}
          flex={1}
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          minH={'520px'}
          px={{ base: 0, md: 4 }}
        >
          <Heading fontSize={'3xl'} fontFamily={'body'} p={2}>
            Pokemon Nome
          </Heading>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={{ base: 1, md: 3 }}
            backgroundColor='white'
            borderRadius='12px'
            minH={'430px'}
            p={2}
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
      </Stack>
    </Center>
  );
}

export default PokemonCardDetails