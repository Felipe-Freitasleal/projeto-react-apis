import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  Button,
  CardFooter
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { goToDetails } from "../../Router/Coordinato"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { PokemonContex } from "../../contexts/PokemonContex"
import swal from "sweetalert"

const PokemonCard = (props) => {

  const { pokemon } = props
  // console.log("POKEMON DO POKECARD", pokemon)

  const navigate = useNavigate()

  const [infoPokemon, setInfoPokemon] = useState()
  // console.log(infoPokemon)

  const context = useContext(PokemonContex)
  const {
    setPokemonDetalhes,
    listaPokedex,
    setListaPokedex,
    listaNomesUrl,
    setListaNomesUrl
  } = context

  useEffect(() => {
    pegarInfoPokemons()
  }, [])

  const pegarInfoPokemons = async () => {
    try {
      const resposta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`)
      // console.log("RESPOSTA DA POKECARD", resposta)
      setInfoPokemon(resposta)
    } catch (error) {
      console.log(error)
    }
  }

  const mandarParaDetalhes = () => {
    setPokemonDetalhes(infoPokemon)
  }

  const mandaParaPokedex = () => {
    //adicona o pokémon a lista da pkédex
    const novaPokedex = [...listaPokedex, infoPokemon]
    setListaPokedex(novaPokedex)
    //gera um alert avisando que o pokémon foi adicionado com sucesso.
    swal({
      title: "Capturado!",
      text: "Seu Pokémon foi adicionado a Pokedex!",
      icon: "success",
    });
    //exclui da lista de pokémons o pokémon que foi clicado.
    const novaListaPokemons = [...listaNomesUrl]
    const acharPokemon = novaListaPokemons.findIndex((pokemonDaLista) => pokemonDaLista.name === pokemon.name)
    console.log('INDICE DO POKÉMON EXCLUIDO', acharPokemon)
    novaListaPokemons.splice(acharPokemon, 1)
    console.log('NOVA LISTA', novaListaPokemons)
    setListaNomesUrl(novaListaPokemons)
  }

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      minW={{ base: '100%', sm: '440px' }}
      maxW={{ base: '100%', sm: '440px' }}
      minH={{ base: '440px', sm: '210px' }}
      maxH={{ base: '440px', sm: '210px' }}
      borderRadius='12px'
      m='16px'
      justifyContent={'center'}
      backgroundImage='https://pngimg.com/uploads/pokeball/pokeball_PNG12.png'
      backgroundSize={'contain'}
      backgroundPosition={'center'}
      backgroundRepeat={'no-repeat'}
    >
      <Stack
        justifyContent={'space-evenly'}
        maxH={{ base: '360px', sm: '210px' }}
        maxW='250px'
        p={1}
      >
        <CardBody
          display={'flex'}
          flexDir="column"
          justifyContent='space-evenly'
          m={1}
          p={1}
          h='80px'
        >
          <Heading
            size='md'
            m={1}
            p={1}
          >
            {infoPokemon ? (infoPokemon.data.name.toUpperCase()) : ("loading")}
          </Heading>
          <Stack
            display='flex'
            flexDir="row"
            maxW='200px'
            maxH='100%'
            alignItems='center'
            p={1}
          >
            {infoPokemon?.data.types.map((types) => {
              return (
                <Text
                  key={types.type.name}
                  border='1px solid grey'
                  borderRadius={'8px'}
                  maxW='80px'
                  maxH='31px'
                  m={1}
                >
                  {types.type.name}
                </Text>
              )
            })}
          </Stack>
        </CardBody>
        <CardFooter
          w='250px'
          justifyContent={'space-evenly'}
          display='flex'
          flexDir={{ base: 'column', sm: 'row' }}
          onClick={() => mandarParaDetalhes()}
          m={0}
          p={1}
        >
          <Button
            variant='solid'
            colorScheme='green'
            w='146px'
            h='38px'
            onClick={() => mandaParaPokedex()}
          >
            Capturar
          </Button>
          <Button
            variant='solid'
            // colorScheme='green'
            bg='transparent'
            w='146px'
            h='38px'
            marginTop={{ base: 1, sm: 0 }}
            onClick={() => goToDetails(navigate)}
          >
            Detalhes
          </Button>
        </CardFooter>
      </Stack>
      <Image
        objectFit={{ base: 'cover', sm: 'cover' }}
        boxSize="100%"
        overflow={'hidden'}
        borderRadius='5px'
        maxW={{ base: '220px', sm: '193px' }}
        minW={{ base: '220px', sm: '193px' }}
        maxH={{ base: '220px', sm: '193px' }}
        minH={{ base: '220px', sm: '193px' }}
        src={infoPokemon?.data.sprites.front_default}
        alt='Pokemon image'
        alignSelf={{ base: 'center', sm: 'flex-start' }}
      />
    </Card>
  )
}

export default PokemonCard
