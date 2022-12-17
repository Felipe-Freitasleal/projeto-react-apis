import { useContext } from "react"
import Header from "../../Components/Header/Header"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { PokemonContex } from "../../contexts/PokemonContex"
import { Div } from "./StyledPokemonsListPage"


const PokemonsListPage = () => {

  const context = useContext(PokemonContex)
  const { listaNomesUrl } = context
  console.log('lista de pokemons na homepage: ', listaNomesUrl)


  return (
    <>
      <Header />
      <Div>
        {listaNomesUrl.map((pokemon) => {
          return <PokemonCard key={pokemon.name} pokemon={pokemon} />
        })}
      </Div>
    </>
  )
}

export default PokemonsListPage