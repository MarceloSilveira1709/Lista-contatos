import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Card = styled.div`
  background-color: #3498db;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 10px;
  width: 300px;
  display: grid;
  `

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  padding: 4px 8px;
  `

export const Nome = styled.span`
padding: 4px 8px;
font-weight: bold;
font-size: 10px;
`

export const Telefone = styled.span``

export const Email = styled.span``

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1)
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
background-color: ${variaveis.verde};
`

export const BotaoEditar = styled(Botao)`
background-color: ${variaveis.laranja};
`

export const BotaoApagar = styled(Botao)`
background-color: ${variaveis.vermelho};
`
