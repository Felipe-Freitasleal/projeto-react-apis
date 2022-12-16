import { ChakraProvider } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import Router from "./Router/Router";
import axios from "axios"

function App() {

  // const [ pokemonsDetalhes, setPokemonsDetalhes ] = useState([])
  const [ listaPokedex, setListaPokedex ] = useState([])
  const [ listaNomesUrl, setListaNomesUrl ] = useState([]) // essa lista de pokemons aopenas guarda o urle nome do pokemon.
  console.log(`Lista com nome e url: `, listaNomesUrl)

  useEffect (()=>{
    pegarNomesPokemons()
  },[])
  
  const pegarNomesPokemons = async () => {
    try{
      const resposta = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
      setListaNomesUrl(resposta.data.results)
    } catch (error) {
      console.log(error)
    }
  }


  return (

    <ChakraProvider>
      <Router />
    </ChakraProvider>

  );
}

export default App;
