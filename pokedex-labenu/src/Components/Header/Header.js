import { Button, Stack, Flex, Img, Text } from "@chakra-ui/react"
import { useLocation, useNavigate } from "react-router-dom"
import { goToHomePage, goToPokedex } from "../../Router/Coordinato"
import pokemonLogo  from "../../assets/Pokemon-Logo.png"

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
      p={1}
    >
      <Img
        // src="https://logosmarcas.net/wp-content/uploads/2020/05/Pokemon-Logo.png"
        src={pokemonLogo}
        alt="pokemon"
        maxH="120px"
      />
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