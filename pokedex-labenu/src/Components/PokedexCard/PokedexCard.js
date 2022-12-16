import {
    Card,
    Image,
    Stack,
    CardBody,
    Heading,
    Text,
    Button,
    CardFooter,
    Progress
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { goToDetails } from "../../Router/Coordinato"

const PokedexCard = (props) => {

    const navigate = useNavigate()

    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            maxW={'440px'}
            maxH={{ base: '540px', sm: '310px' }}
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

            >
                <CardBody>
                    <Heading size='md'>
                        Pokemon Nome
                    </Heading>
                    <Text
                        py='2'
                    >
                        Atributos
                    </Text>
                </CardBody>
                <CardFooter
                    w='300px'
                    justifyContent={'space-evenly'}
                    display='flex'
                    flexDir={{ base: 'column', sm: 'row' }}
                >
                    <Button variant='solid' colorScheme='blue' maxW='180px'>
                        Excluir
                    </Button>
                    <Button
                        variant='solid'
                        colorScheme='green'
                        onClick={() => goToDetails(navigate)}
                        maxW='180px'
                        marginTop={{ base: 1, sm: 0 }}
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

export default PokedexCard
