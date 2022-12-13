import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonsListPage from "../Pages/PokemonsListPage/PokemonsListPage"
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage"
import PokedexPage from "../Pages/PokedexPage/PokedexPage"
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonsListPage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/detalhes" element={<PokemonDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

