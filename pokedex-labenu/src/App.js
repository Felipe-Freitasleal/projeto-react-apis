import { ChakraProvider } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import Router from "./Router/Router";
import axios from "axios"
import { PokemonContex } from "./contexts/PokemonContex";
import { GlobalStyle } from "./GlobalStyle";

function App() {

  const [pokemonDetalhes, setPokemonDetalhes] = useState()
  const [listaPokedex, setListaPokedex] = useState([])
  const [listaNomesUrl, setListaNomesUrl] = useState([]) // essa lista de pokemons aopenas guarda o urle nome do pokemon.
  console.log(`Lista com nome e url: `, listaNomesUrl)
  console.log('Lista da pokedex: ', listaPokedex)
  console.log('Detalhes dos pokémon: ', pokemonDetalhes)

  useEffect(() => {
    pegarNomesPokemons()
  }, [])

  const pegarNomesPokemons = async () => {
    try {
      const resposta = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
      setListaNomesUrl(resposta.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  const context = {
    listaNomesUrl: listaNomesUrl,
    setListaNomesUrl: setListaNomesUrl,
    listaPokedex: listaPokedex,
    setListaPokedex: setListaPokedex,
    pokemonDetalhes: pokemonDetalhes,
    setPokemonDetalhes: setPokemonDetalhes
  }


  return (

    <PokemonContex.Provider value={context}>
      <ChakraProvider>
        <GlobalStyle />
        <Router />
      </ChakraProvider>
    </PokemonContex.Provider>

  );
}

export default App;
