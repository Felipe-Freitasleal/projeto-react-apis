import { useContext } from "react"
import Header from "../../Components/Header/Header"
import PokedexCard from "../../Components/PokedexCard/PokedexCard"
import { PokemonContex } from "../../contexts/PokemonContex"
import { Div, Pokemons } from "./StyledPokedexPage"

const PokedexPage = () => {

  const context = useContext(PokemonContex)
  const { listaPokedex } = context

  return (
    <>
      <Header />
      <Div>
        <Pokemons>
          <header>
            MEUS POKÉMONS
          </header>
          <div className="pokemonsPokedex">
            {listaPokedex?.map((pokemon) => {
              return <PokedexCard key={pokemon.data.id} pokemon={pokemon} />
            })}
          </div>
        </Pokemons>
      </Div>
    </>
  )
}

export default PokedexPage