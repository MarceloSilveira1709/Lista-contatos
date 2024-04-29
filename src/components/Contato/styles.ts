import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Card = styled.div`
  background-color: #5f27cd;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 10px;
  width: 350px;
  align-items: center;
  display:block;
  `

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  padding: 4px 8px;
  color: #222f3e;
  `

export const Nome = styled.textarea`
padding: 4px 8px;
font-weight: bold;
background-color: transparent;
color: #c8d6e5;
border: none;
resize: none;

`

export const Telefone = styled.textarea`
padding: 4px 8px;
font-weight: bold;
background-color: transparent;
color: #c8d6e5;
border: none;
resize: none;
`

export const Email = styled.textarea`
padding: 4px 8px;
font-weight: bold;
background-color: transparent;
color: #c8d6e5;
border: none;
resize: none;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 5px 8px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 8px;
  margin-left: 8px;
`



export const BotaoEditar = styled(Botao)`
background-color: ${variaveis.laranja};
margin-right: 10px;
`

export const BotaoApagar = styled(Botao)`
background-color: ${variaveis.vermelho};
`
