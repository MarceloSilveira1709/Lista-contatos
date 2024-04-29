import {useEffect, useState} from 'react'
import * as S from '../Contato/styles'
import { useDispatch } from 'react-redux'
import { remover, editar,} from '../../store/reducers/contatos'
import ContatoClass from '../../models/Tarefa'


type Props = ContatoClass

const Contato = ({nome:nomeOriginal, telefone:telefoneOriginal, email:emailOriginal, id}:Props) => {
  const [estaEditando , setEstaEditando] = useState (false)
  const dispatch = useDispatch()
  const [nome , setNome] = useState ('')
  const [telefone , setTelefone] = useState ('')
  const [email , setEmail] = useState ('')

  useEffect (() => {
    if (nomeOriginal.length > 0)
    setNome(nomeOriginal)
  },[nomeOriginal])

  useEffect (() => {
    if (telefoneOriginal.length > 0)
    setTelefone(telefoneOriginal)
  },[nomeOriginal])

  useEffect (() => {
    if (emailOriginal.length > 0)
    setEmail(emailOriginal)
  },[emailOriginal])

  return (

    <S.Card>
      <S.Titulo>Contato</S.Titulo>
      <S.Nome disabled={!estaEditando} value={nome} onChange={evento => setNome(evento.target.value)}>{nome}</S.Nome>
      <S.Telefone disabled={!estaEditando} value={telefone} onChange={evento => setTelefone(evento.target.value)}>{telefone}</S.Telefone>
      <S.Email disabled={!estaEditando} value={email} onChange={evento => setEmail(evento.target.value)}>{email}</S.Email>

      <S.BotaoEditar onClick={() => setEstaEditando(true)}>Editar</S.BotaoEditar>
      <S.BotaoApagar onClick={() => dispatch(remover(id))}>Apagar</S.BotaoApagar>
    </S.Card>
    )
  }

  export default Contato
