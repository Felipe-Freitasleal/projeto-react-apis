import { useContext } from "react"
import Header from "../../Components/Header/Header"
import PokedexCard from "../../Components/PokedexCard/PokedexCard"
import { PokemonContex } from "../../contexts/PokemonContex"
import { Div } from "./StyledPokedexPage"

const PokedexPage = () => {

  const context = useContext(PokemonContex)
  const { listaPokedex } = context

  return (
    <>
      <Header />
      <Div>
        {listaPokedex?.map((pokemon) => {
          return <PokedexCard key={pokemon.data.id} pokemon={pokemon} />
        })}
      </Div>
    </>
  )
}

export default PokedexPage