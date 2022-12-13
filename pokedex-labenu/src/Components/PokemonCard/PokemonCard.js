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
import { useLocation, useNavigate } from "react-router-dom"
import { goToDetails } from "../../Router/Coordinato"

const PokemonCard = () => {

  const navigate = useNavigate()

  const local = useLocation()

  const verificarLocal = () => {
    switch (local.pathname) {
      case '/':
        return (
          <Button variant='solid' colorScheme='blue'>
            Capturar
          </Button>
        );
      case '/pokedex':
        return (
          <Button variant='solid' colorScheme='blue'>
            Excluir
          </Button>
        );
      default:
          break;
    }
  }

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      maxW={'440px'}
      maxH={{ base: '440px', sm: '210px' }}
      borderRadius='12px'
      m='16px'
    >
      <Stack
        justifyContent={'space-evenly'}
        maxH='210px'
        maxW='300px'
      >
        <CardBody>
          <Heading size='md'>Pokemon Nome</Heading>
          <Text py='2'>
            Atributos
          </Text>
        </CardBody>
        <CardFooter
        w='300px'
        justifyContent={'space-evenly'}
        >
          {verificarLocal()}
          <Button
            variant='solid'
            colorScheme='green'
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
        maxW={{ base: '300', sm: '300px' }}
        src='https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg'
        alt='Pokemon image'
        alignSelf={{ base: 'center', sm: 'flex-start' }}
      />
    </Card>
  )
}

export default PokemonCard
