import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/Tarefa"

type ContatosState = {
  itens: Contato []
}

const initialState : ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Marcelo Silveira',
      telefone: '519958049',
      email: 'lelosilvera@hotmail.com'
    },
    {
      id: 2,
      nome: 'Cecilia Passos',
      telefone: '545454564',
      email: 'cecinha@hotmail.'
    },
    {
      id: 3,
      nome: 'Natalia passos',
      telefone: '5158466623',
      email: 'teste@hotmail.com'
    }
  ]
}
const contatosSlice = createSlice ({
  name:  'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((contato) => contato.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>)  => {
    const indexDoContato  = state.itens.findIndex(c => c.id === action.payload.id)

    if (indexDoContato >= 0) {
      state.itens[indexDoContato] = action.payload
    }
  },
  cadastrar: (state, action: PayloadAction<Contato>)  => {
    const TarefaJaExiste  = state.itens.find(
      (contato) =>
      contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (TarefaJaExiste) {
        alert ('Ja existe um contato com esse nome')
      } else {
        state.itens.push(action.payload)
      }
  }
  }
})

export const {remover, editar, cadastrar} = contatosSlice.actions

export default contatosSlice.reducer


