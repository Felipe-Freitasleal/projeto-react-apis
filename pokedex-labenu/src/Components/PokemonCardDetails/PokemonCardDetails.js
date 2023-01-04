import {
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  Box,
  Progress,
  Button
} from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import { PokemonContex } from '../../contexts/PokemonContex'
import pokebolaBackGround from '../../assets/pokebola.png'
import swal from "sweetalert"
import { backgroundCard, backgroundTipo } from '../../utilitys/backgroundColor'

function PokemonCardDetails() {

  const context = useContext(PokemonContex)
  const { pokemonDetalhes,
    listaPokedex,
    listaNomesUrl,
    setListaPokedex,
    setListaNomesUrl
  } = context

  const [listaAtaques, setListaAtaques] = useState([])
  useEffect(() => {
    renderizarAtaques()
  }, [])
  const renderizarAtaques = () => {
    const primeirosAtaques = pokemonDetalhes?.data.moves.slice(0, 8)
    setListaAtaques(primeirosAtaques)
  }

  const mandaParaPokedex = () => {
    //adicona o pokémon a lista da pokedex
    const novaPokedex = [...listaPokedex, pokemonDetalhes]
    setListaPokedex(novaPokedex)
    //gera um alert avisando que o pokémon foi adicionado com sucesso.
    swal({
      title: "Capturado!",
      text: "Seu Pokémon foi adicionado a Pokedex!",
      icon: "success",
    });
    //exclui da lista de pokémons o pokémon que foi clicado.
    const novaListaPokemons = [...listaNomesUrl]
    const acharPokemon = novaListaPokemons.findIndex((pokemonDaLista) => pokemonDaLista.name === pokemonDetalhes.data.name)
    novaListaPokemons.splice(acharPokemon, 1)
    setListaNomesUrl(novaListaPokemons)
  }

  const excluirDaPokedex = () => {
    //copia a liksta de nomes de pokémons e adiciona o pokémon que será excluido da pokedex.
    const novaListaPokemons = [{ name: pokemonDetalhes.data.name }, ...listaNomesUrl]
    setListaNomesUrl(novaListaPokemons)

    swal({
      title: "Excluído!",
      text: "O pokémon foi removido da pokedex!",
      icon: "success",
    });

    //achar o pokémon da pokedex na copia da lista da pokedex e excluir, depois substituir a antiga lista pela cópia.
    const novaPokedex = [...listaPokedex]
    const acharIndex = novaPokedex.findIndex((item) => item.data.name === pokemonDetalhes.data.name)
    novaPokedex.splice(acharIndex, 1)
    setListaPokedex(novaPokedex)
  }

  const botaoExcluirCapturar = () => {
    for (let i = 0; i < listaNomesUrl.length; i++) {
      if (pokemonDetalhes?.data.name == listaNomesUrl[i].name) {
        return (
          <Button
            onClick={() => mandaParaPokedex()}
          >
            Capturar!
          </Button>
        )
      }
    }
    for (let i = 0; i < listaPokedex.length; i++) {
      if (pokemonDetalhes?.data.name === listaPokedex[i].data.name) {
        return (
          <Button
            colorScheme='red'
            onClick={() => excluirDaPokedex()}
          >
            Excluir da Pokedex
          </Button>
        )
      }
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
      <Box
        display='flex'
        flexDir={{ base: 'column', md: 'row' }}
        justifyContent='space-between'
        w={{ sm: '100%', md: '1200px' }}
        m={1}
      >
        <Heading
          fontFamily={'body'}
          fontSize={'48px'}
          fontWeight='bold'
          color='white'
          py={1}
        >
          DETALHES
        </Heading>
        {botaoExcluirCapturar()}
      </Box>
      <Stack
        borderRadius='37.89px'
        boxShadow={'2xl'}
        w={{ sm: '300px', md: '1200px' }}
        height={{ sm: '1376px', sm: '1650px', md: '663px' }}
        p={{ sm: '0', md: '32px' }}
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
          m={{ base: '24px', sm: '0px' }}
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
          minW={{ base: '300px', md: '343px' }}
          maxW={{ base: '300px', md: '343px' }}
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
                  borderRadius={'8px'}
                  maxW='80px'
                  minW=' 80px'
                  maxH='31px'
                  minH='31px'
                  marginRight={1}
                  marginTop={1}
                  display='flex'
                  alignItems='center'
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
              justifyContent='center'
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
                    alignItems='center'
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