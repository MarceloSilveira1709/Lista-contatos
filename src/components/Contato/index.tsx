import * as S from '../Contato/styles'
import { useDispatch } from 'react-redux'
import { remover} from '../../store/reducers/contatos'
import ContatoClass from '../../models/Tarefa'

type Props = ContatoClass


const Contato = ({nome, telefone, email, id}:Props) => {
  const dispatch = useDispatch()

  return (

    <S.Card>
      <S.Titulo>Contato</S.Titulo>
      <S.Nome>{nome}</S.Nome>
      <S.Telefone>{telefone}</S.Telefone>
      <S.Email>{email}</S.Email>
      <S.BarraAcoes>
      <S.BotaoEditar>Editar</S.BotaoEditar>
      <S.BotaoApagar onClick={() => dispatch(remover(id))}>Apagar</S.BotaoApagar>
      </S.BarraAcoes>
    </S.Card>
    )
  }

  export default Contato
