import { Button, Text, Stack, Flex } from "@chakra-ui/react"
import { useLocation, useNavigate } from "react-router-dom"
import { goToHomePage, goToPokedex } from "../../Router/Coordinato"

const Header = () => {

  const navigate = useNavigate()

  const local = useLocation()
  console.log(local) // o useLocaltion retorna um objeto, e uma das propriedades desse objetro é o pathname, que é o nome do path da página onede o usuário está.
  console.log(local.pathname)

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
          <>
            <Button onClick={() => goToHomePage(navigate)} colorScheme='green'>Home</Button>
            <Button onClick={() => goToPokedex(navigate)} colorScheme='green'>Pokedex</Button>
          </>
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
      bg='#4d526c'
    >
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