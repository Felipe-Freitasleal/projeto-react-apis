import styled from "styled-components"

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:grey;
`
export const Pokemons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1400px;
    min-width: 1350px;

    header{
            color: white;
            padding: 16px;
            font-size: 48px;
            font-weight: bold;
        }

    .listaPokemons{
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
`