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
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { PokemonContex } from "../../contexts/PokemonContex"
import { goToDetails } from "../../Router/Coordinato"
import swal from "sweetalert"

const PokedexCard = (props) => {

  const { pokemon } = props

  const context = useContext(PokemonContex)
  const {
    listaNomesUrl,
    setListaNomesUrl,
    listaPokedex,
    setListaPokedex,
    setPokemonDetalhes
  } = context

  const navigate = useNavigate()

  const mandarParaDetalhes = () => {
    setPokemonDetalhes(pokemon)
  }

  const excluirDaPokedex = () => {
    //copia a liksta de nomes de pokémons e adiciona o pokémon que será excluido da pokedex.
    const novaListaPokemons = [{ name: pokemon.data.name }, ...listaNomesUrl]
    setListaNomesUrl(novaListaPokemons)

    swal({
      title: "Excluído!",
      text: "O pokémon foi removido da pokedex!",
      icon: "success",
    });

    //achar o pokémon da pokedex na copia da lista da pokedex e excluir, depois substituir a antiga lista pela cópia.
    const novaPokedex = [...listaPokedex]
    const acharIndex = novaPokedex.findIndex((item) => item.data.name === pokemon.data.name)
    novaPokedex.splice(acharIndex, 1)
    setListaPokedex(novaPokedex)
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
      alignItems='center'
      backgroundImage='https://pngimg.com/uploads/pokeball/pokeball_PNG12.png'
      backgroundSize={'contain'}
      backgroundPosition={'center'}
      backgroundRepeat={'no-repeat'}
      backgroundColor="#B0C4DE"
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
          alignItems={{ base: "center", sm: "flex-start" }}
        >
          <Heading
            size='md'
            m={1}
            p={1}

          >
            {pokemon ? (pokemon.data.name.toUpperCase()) : ("loading")}
          </Heading>
          <Box
            display='flex'
            flexDir="row"
            maxW='100%'
            maxH='100%'
            alignItems='center'
            justifyContent={{ base: "center", sm: "flex-start" }}
            // {{ base: "center", sm: "flex-start"}}
            p={1}
          >
            {pokemon?.data.types.map((types) => {
              return (
                <Text
                  key={types.type.name}
                  border='1px solid grey'
                  borderRadius={'8px'}
                  maxW='80px'
                  minW=' 80px'
                  maxH='31px'
                  minH='31px'
                  m={1}
                  display='flex'
                  alignItems='flex-end'
                  justifyContent='center'
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
            mx={1}
            onClick={() => excluirDaPokedex()}
          >
            Excluir
          </Button>
          <Button
            variant='solid'
            colorScheme='blue'
            // bg='transparent'
            w='146px'
            h='38px'
            marginTop={{ base: 1, sm: 0 }}
            onClick={() => goToDetails(navigate)}
            mx={1}
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
        src={pokemon?.data.sprites.front_default}
        alt='Pokemon image'
        alignSelf={{ base: 'center', sm: 'flex-start' }}
      />
    </Card>
  )
}

export default PokedexCard
