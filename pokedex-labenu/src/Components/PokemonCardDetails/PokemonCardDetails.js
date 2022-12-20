import {
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  Box,
  Progress
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { PokemonContex } from '../../contexts/PokemonContex';

function PokemonCardDetails() {

  const context = useContext(PokemonContex)
  const { pokemonDetalhes } = context
  console.log(pokemonDetalhes)

  const [listaAtaques, setListaAtaques] = useState([])

  useEffect(() => {
    renderizarAtaques()
  }, [])

  const renderizarAtaques = () => {
    const primeirosAtaques = pokemonDetalhes?.data.moves.slice(0, 14)
    console.log(primeirosAtaques)
    setListaAtaques(primeirosAtaques)
  }


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
        flexDirection={{ base: 'column-reverse', md: 'row' }}
        justifyContent={'space-evenly'}
        alignItems='center'
      >
        <Flex
          display='flex'
          flexDirection={{ base: 'column', sm: 'row', md: 'column' }}
          justifyContent='center'
          alignItems='center'
          m={2}
        >
          <Image
            objectFit="cover"
            boxSize="100%"
            maxH={"12rem"}
            minW='12rem'
            src={
              pokemonDetalhes?.data.sprites.front_default
            }
            my={5}
            mx={{ base: '24px', md: '0px' }}
            borderRadius={'5px'}
            overflow={'hidden'}
            backgroundColor='white'
            p={2}
          />
          <Image
            objectFit="cover"
            boxSize="100%"
            maxH={"12rem"}
            borderRadius={'5px'}
            overflow={'hidden'}
            src={
              pokemonDetalhes?.data.sprites.back_default
            }
            my={5}
            mx={{ base: '24px', md: '0px' }}
            backgroundColor='white'
            p={2}
          />
        </Flex>
        <Stack
          mt={'1rem'}
          flex={1}
          display='flex'
          flexDirection="column"
          alignItems='flex-start'
          justifyContent='flex-start'
          p={2}
          m={2}
          backgroundColor='white'
          borderRadius='12px'
          minH={'540px'}
          minW={{ base: '300px', md: '400px' }}
        >
          <Heading
            fontSize={'2xl'}
            fontFamily={'body'}
            m={4}
            display='flex'
            alignItems='flex-start'
            justifyContent='flex-start'
          >
            Atributos
          </Heading>
          <Box
            mt={'1rem'}
            flex={1}
            display='flex'
            flexDirection="column"
            alignItems='center'
            justifyContent='flex-start'
            p={2}
          >

            {pokemonDetalhes?.data.stats.map((status) => {
              return (
                <Box
                  display='flex'
                  flexDir='row'
                  key={status.stat.name}
                  justifyContent='center'
                  alignItems='center'
                >
                  <Text
                    m={1}
                  >
                    {status.stat.name}
                  </Text>
                  <Text
                    m={1}
                  >
                    {status.base_stat}
                  </Text>
                  <Progress colorScheme='yellow' size='sm' value={status.base_stat}
                    borderRadius='5px'
                    minW='120px'
                    m={1}
                  />
                </Box>
              )
            })}
          </Box>
        </Stack>
        <Stack
          mt={'1rem'}
          flex={1}
          display='flex'
          flexDirection="column"
          alignItems='center'
          justifyContent='flex-start'
          borderRadius='12px'
          minH={{ base: '520px', sm: '300px', md: '520px' }}
          minW={{ base: '300px', sm: '100%', md: ' 300px' }}
          px={2}
          m={2}
        >
          <Heading
            fontSize={'3xl'}
            fontFamily={'body'} p={2}
          >
            {pokemonDetalhes?.data.name.toUpperCase()}
          </Heading>
          <Box
            display='flex'
            flexDir="row"
            maxW='100%'
            maxH='100%'
            alignItems='center'
            justifyContent={{ base: "center", sm: "flex-start" }}
            p={1}
          >
            {pokemonDetalhes?.data.types.map((type) => {
              return (
                <Text
                  key={type.type.name}
                  border='1px solid black'
                  borderRadius={'8px'}
                  maxW='80px'
                  minW=' 80px'
                  maxH='31px'
                  minH='31px'
                  m={1}
                  p={1}
                  display='flex'
                  alignItems='flex-end'
                  justifyContent='center'
                >
                  {type.type.name}
                </Text>
              )
            })}
          </Box>
          <Stack
            backgroundColor='white'
            borderRadius='16px'
            h='100%'
          >
            <Heading
              fontSize={'2xl'}
              fontFamily={'body'}
              m={4}
            >
              Movimentos
            </Heading>
            <Box
              color={useColorModeValue('gray.700', 'gray.400')}
              m={4}
              p={2}
              display='flex'
              flexWrap='wrap'
              flexDir='row'
              justifyContent='center'
            >
              {listaAtaques?.map((ataque) => {
                return (
                  <Text
                    key={ataque.move.name}
                    border='1px solid grey'
                    borderRadius={'8px'}
                    maxW='150px'
                    minW='150px'
                    maxH='31px'
                    minH='31px'
                    m={1}
                    display='flex'
                    alignItems='flex-end'
                    justifyContent='center'
                  >
                    {ataque.move.name}
                  </Text>
                )
              })}
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}



export default PokemonCardDetails