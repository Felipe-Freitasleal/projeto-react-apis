import { Button, Stack, Flex, Img, Text } from "@chakra-ui/react"
import { useLocation, useNavigate } from "react-router-dom"
import { goToHomePage, goToPokedex } from "../../Router/Coordinato"

const Header = () => {

  const navigate = useNavigate()

  const local = useLocation()
  // o useLocaltion retorna um objeto, e uma das propriedades desse objetro é o pathname, que é o nome do path da página onede o usuário está.


  const verificarLocal = () => {
    switch (local.pathname) {
      case '/':
        return (
          <Button onClick={() => goToPokedex(navigate)} colorScheme='green'>Pokedex</Button>
        );
      case '/pokedex':
        return (
          <Button onClick={() => goToHomePage(navigate)} colorScheme='green'>Home</Button>
        );

      default:
        return (
          <div
            display='flex'
            flexDir='row'
            justifyContent='space-evenly'
          >
            <Button
              onClick={() => goToHomePage(navigate)}
              colorScheme='green'
              m={1}
            >
              Home
            </Button>
            <Button
              onClick={() => goToPokedex(navigate)}
              colorScheme='green'
              m={1}
            >
              Pokedex
            </Button>
          </div>
        );
    }
  }

  return (
    <Stack
      display={"flex"}
      flexDir={"column"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      p={4}
    >
      <Img src="../../assets/image 1.jpg" alt="pokemon"/>
      <Text fontSize='4xl' color='#fca120'>POKÉMONS</Text>
      <Flex
        flexDir={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {verificarLocal()}
      </Flex>
    </Stack>


  )
}

export default Header