import styled, { createGlobalStyle } from "styled-components";
import variaveis from "./variaveis";
import { Botao } from "../components/Contato/styles";

const EstiloGlobal = createGlobalStyle`
  * {
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`

  grid-template-columns: 224px auto;
`


export const MainContainer = styled.main`
padding: 0 40px
`
export const BotaoSalvar = styled(Botao)`
background-color: ${variaveis.verde};
padding-bottom: 5px;
`

export default EstiloGlobal
