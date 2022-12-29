import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  Button,
  CardFooter,
  Box
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { goToDetails } from "../../Router/Coordinato"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { PokemonContex } from "../../contexts/PokemonContex"
import swal from "sweetalert"
import pokebolaTransparente from "../../assets/pokebola.png"
import { backgroundCard, backgroundTipo } from "../../utilitys/backgroundColor"

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
    //adicona o pokémon a lista da pokedex
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
      minW={{ base: '100%', sm: '440px' }}
      maxW={{ base: '100%', sm: '440px' }}
      minH={{ base: '440px', sm: '210px' }}
      maxH={{ base: '440px', sm: '210px' }}
      borderRadius='12px'
      m='12px'
      justifyContent={'center'}
      alignItems='center'
      backgroundImage={pokebolaTransparente}
      backgroundSize={'auto'}
      backgroundPosition={'right'}
      backgroundRepeat={'no-repeat'}
      backgroundColor={backgroundCard(infoPokemon?.data.types[0].type.name)}

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
          justifyContent='space-between'
          m={1}
          p={1}
          h='80px'
          alignItems={{ base: "center", sm: "flex-start" }}
        >
          <Text
            color='white'
          >
            #{infoPokemon ? (infoPokemon.data.id) : ("loading")}
          </Text>
          <Heading
            size='md'

            color='white'
          >
            {infoPokemon ? (infoPokemon.data.name.toUpperCase()) : ("loading")}
          </Heading>
          <Box
            display='flex'
            flexDir="row"
            maxW='100%'
            maxH='100%'
            alignItems='center'
            justifyContent={{ base: "center", sm: "flex-start" }}

          >
            {infoPokemon?.data.types.map((types) => {
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
                  alignItems='flex-end'
                  justifyContent='center'
                  backgroundColor={backgroundTipo(types.type.name)}
                  color='white'
                >
                  {types.type.name}
                </Text>
              )
            })}
          </Box>
        </CardBody>
        <CardFooter
          w='250px'
          justifyContent={'space-evenly'}
          alignItems='center'
          display='flex'
          flexDir={{ base: 'column', sm: 'row' }}
          onClick={() => mandarParaDetalhes()}
          p={1}
        >
          <Button
            variant='solid'
            colorScheme='green'
            w='146px'
            h='38px'
            marginTop={1}
            onClick={() => goToDetails(navigate)}
            marginRight={1}

          >
            Detalhes
          </Button>
          <Button
            bg='white'
            color='black'
            w='146px'
            h='38px'
            onClick={() => mandaParaPokedex()}
            marginRight={1}
            marginTop={1}
            hover={
              {
                backgroundColor: "blue"
              }
            }
          >
            Capturar
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
        src={infoPokemon?.data.sprites.other['official-artwork'].front_default}
        alt='Pokemon image'
        alignSelf={{ base: 'center', sm: 'flex-start' }}
      />
    </Card>
  )
}

export default PokemonCard
