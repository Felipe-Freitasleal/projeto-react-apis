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
} from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import { PokemonContex } from '../../contexts/PokemonContex'
import pokebolaBackGround from '../../assets/pokebola.png'

function PokemonCardDetails() {

  const context = useContext(PokemonContex)
  const { pokemonDetalhes } = context
  console.log(pokemonDetalhes)

  const [listaAtaques, setListaAtaques] = useState([])

  useEffect(() => {
    renderizarAtaques()
  }, [])

  const renderizarAtaques = () => {
    const primeirosAtaques = pokemonDetalhes?.data.moves.slice(0, 8)
    console.log(primeirosAtaques)
    setListaAtaques(primeirosAtaques)
  }

  const backgroundTipo = (tipo) => {
    switch (tipo) {
      case 'grass':
        return '#70B873'
      case 'poison':
        return '#AD61AE'
      case 'fire':
        return '#F44900'
      case 'flying':
        return '#6892B0'
      case 'water':
        return '#33A4F5'
      case 'bug':
        return '#316520'
      case 'normal':
        return '#8A8A8A'
    }
  }

  const backgroundCard = (tipo) => {
    switch (tipo) {
      case 'grass':
        return '#729F92'
      case 'poison':
        return '#AD61AE'
      case 'fire':
        return '#EAAB7D'
      case 'flying':
        return '#6892B0'
      case 'water':
        return '#71C3FF'
      case 'bug':
        return '#76A866'
      case 'normal':
        return '#BF9762'
    }
  }

  return (
    <Center
      px={6}
      py={3}
      bg={useColorModeValue('grey', 'gray.900')}
      display='flex'
      flexDir='column'
      alignItems='center'
      justifyContent='center'
    >
      <Heading
        fontFamily={'body'}
        fontSize={'5xl'}
        fontWeight='bold'
        color='white'
        py={1}
      >
        DETALHES
      </Heading>
      <Stack
        borderWidth="1px"
        borderRadius='37.89px'
        boxShadow={'2xl'}
        w={{ sm: '100%', md: '1200px' }}
        height={{ sm: '1376px', sm: '1650px', md: '663px' }}
        p=' 32px'
        display='flex'
        flexDirection={{ base: 'column-reverse', md: 'row' }}
        justifyContent={{ base: 'space-between', sm: 'flex-end', md: 'space-between' }}
        alignItems='center'
        backgroundColor={backgroundCard(pokemonDetalhes?.data.types[0].type.name)}
        backgroundImage={pokebolaBackGround}
        backgroundSize={'contain'}
        backgroundPosition={'right'}
        backgroundRepeat={'no-repeat'}
      >
        <Flex
          flexDirection={{ base: 'column', sm: 'row', md: 'column' }}
          maxH={'610px'}
          minH={'610px'}
          justifyContent='space-between'
          m={{ base: '24px', sm: '0px'}}
        >
          <Image
            objectFit="cover"
            boxSize="100%"
            maxH='282px'
            minH='282px'
            maxW='282px'
            minW='282px'
            src={
              pokemonDetalhes?.data.sprites.front_default
            }
            borderRadius={'8px'}
            overflow={'hidden'}
            backgroundColor='white'
          />
          <Image
            objectFit="cover"
            boxSize="100%"
            maxH='282px'
            minH='282px'
            maxW='282px'
            minW='282px'
            src={
              pokemonDetalhes?.data.sprites.back_default
            }
            borderRadius={'8px'}
            overflow={'hidden'}
            backgroundColor='white'
          />
        </Flex>
        <Stack
          flex={1}
          display='flex'
          flexDirection="column"
          alignItems='flex-start'
          justifyContent='flex-start'
          backgroundColor='white'
          borderRadius='12px'
          maxH={'613px'}
          minH={'613px'}
          minW={{base: '300px', md: '343px'}}
          maxW={{base: '300px', md: '343px'}}
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
            alignItems='flex-start'
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
          flex={1}
          display='flex'
          flexDirection="column"
          alignItems='center'
          justifyContent='space-between'
          borderRadius='12px'
          maxH={'613px'}
          minH={'613px'}
          minW='292px'
          maxW='292px'
        >
          <Heading
            fontSize={'4xl'}
            fontFamily={'body'} p={2}
            color='white'
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
            {pokemonDetalhes?.data.types.map((types) => {
              return (
                <Text
                  key={types.type.name}
                  border='1px solid grey'
                  borderRadius={'8px'}
                  maxW='80px'
                  minW=' 80px'
                  maxH='31px'
                  minH='31px'
                  marginRight={1}
                  marginTop={1}
                  display='flex'
                  alignItems='flex-end'
                  justifyContent='center'
                  backgroundColor={() => backgroundTipo(types.type.name)}
                  color='white'
                >
                  {types.type.name}
                </Text>
              )
            })}
          </Box>
          <Stack
            backgroundColor='white'
            borderRadius='16px'
            h='453px'
            minW='292px'
            maxW='292px'
            alignSelf='center'
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
              justifyContent='flex-start'
            >
              {listaAtaques?.map((ataque) => {
                return (
                  <Text
                    key={ataque.move.name}
                    borderRadius={'8px'}
                    backgroundColor='#ECECEC'
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
    </Center >
  );
}



export default PokemonCardDetails