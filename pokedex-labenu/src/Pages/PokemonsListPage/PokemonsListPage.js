import { Flex } from "@chakra-ui/react"
import { useContext } from "react"
import Header from "../../Components/Header/Header"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { PokemonContex } from "../../contexts/PokemonContex"
import { Div, Pokemons } from "./StyledPokemonsListPage"


const PokemonsListPage = () => {

  const context = useContext(PokemonContex)
  const { listaNomesUrl } = context

  return (
    <>
      <Header />
      <Div>
        <Pokemons>
          <header>
            TODOS OS POKÉMONS
          </header>
          <div className="listaPokemons">
            {listaNomesUrl.map((pokemon) => {
              return <PokemonCard key={pokemon.name} pokemon={pokemon} />
            })}
          </div>
        </Pokemons>
      </Div>
    </>
  )
}

export default PokemonsListPage