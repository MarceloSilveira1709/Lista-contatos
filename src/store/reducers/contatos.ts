import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/Tarefa"

type ContatosState = {
  itens: Contato []
}

const initialState : ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'marcelo',
      telefone: '545454564',
      email: 'dlsadsid@@@'
    },
    {
      id: 2,
      nome: 'marcelo',
      telefone: '545454564',
      email: 'dlsadsid@@@'
    },
    {
      id: 3,
      nome: 'marcelo',
      telefone: '545454564',
      email: 'dlsadsid@@@'
    }
  ]
}
const contatosSlice = createSlice ({
  name:  'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const {remover} = contatosSlice.actions

export default contatosSlice.reducer
