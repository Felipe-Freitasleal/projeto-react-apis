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
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { PokemonContex } from "../../contexts/PokemonContex"
import { goToDetails } from "../../Router/Coordinato"

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

    return (
        <Card
            display='flex'
            flexDir={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            minW='440px'
            maxW='440px'
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
                maxW='300px'
                p={1}
            >
                <CardBody
                    display={'flex'}
                    flexDir="column"
                    justifyContent={'space-evenly'}
                    m={0}
                    p={1}
                    h='80px'
                >
                    <Heading
                        size='md'
                        m={1}
                        p={1}
                    >
                        {pokemon ? (pokemon.data.name.toUpperCase()) : ("loading")}
                    </Heading>
                    <Stack
                        display={'flex'}
                        flexDir="row"
                        maxW={'100px'}
                        alignItems='center'
                    >
                        {pokemon?.data.types.map((types) => {
                            return (
                                <Text
                                    key={types.type.name}
                                    border='1px solid grey'
                                    borderRadius={'8px'}
                                    m={1}
                                    p={1}
                                >
                                    {types.type.name}
                                </Text>
                            )
                        })}
                    </Stack>
                </CardBody>
                <CardFooter
                    w='300px'
                    justifyContent={'space-evenly'}
                    display='flex'
                    flexDir={{ base: 'column', sm: 'row' }}
                    onClick={() => mandarParaDetalhes()}
                    m={0}
                    p={1}
                >
                    <Button
                        variant='solid'
                        colorScheme='blue'
                        maxW='180px'
                    // onClick={() => mandaParaPokedex()}
                    >
                        Excluir
                    </Button>
                    <Button
                        variant='solid'
                        colorScheme='green'
                        maxW='180px'
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
                maxW={{ base: '220', sm: '120px' }}
                maxH={{ base: '220', sm: '120px' }}
                src={pokemon?.data.sprites.front_default}
                alt='Pokemon image'
                alignSelf={{ base: 'center', sm: 'flex-start' }}
            />
        </Card>
    )
}

export default PokedexCard
