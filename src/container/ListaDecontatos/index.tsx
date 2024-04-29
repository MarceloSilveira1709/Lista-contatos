import { useSelector } from "react-redux"
import Contato from "../../components/Contato"
import { MainContainer, } from "../../styles"
import { RootReducer } from "../../store"


const ListaDeContatos = () => {
  const {itens} =useSelector((state: RootReducer) =>  state.contatos)

  return (
    <MainContainer>
    <p>2 tarefas marcadas</p>
    <ul>
      {itens.map((c) => (
      <li key={c.nome}>
        <Contato nome={c.nome} telefone={c.telefone} email={c.email} id={c.id} />
      </li>
      ))}
    </ul>
    </MainContainer>
  )
}


export default ListaDeContatos
