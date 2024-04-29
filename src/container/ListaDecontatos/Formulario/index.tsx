
import { FormEvent, useState } from 'react'
import {BotaoSalvar, MainContainer } from '../../../styles'
import  {Form , } from './styles'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Contato from '../../../models/Tarefa'
import { cadastrar } from '../../../store/reducers/contatos'
import { Email, Nome, Telefone } from '../../../components/Contato/styles'

const Formulario = () => {
  const dispatch = useDispatch ()
  const navigate = useNavigate()

  const [nome, setNome] = useState ('')
  const [telefone, setTelefone] = useState ('')
  const [email, setEmail] = useState ('')

const cadastrarContato = (evento: FormEvent ) => {
  evento.preventDefault()

  dispatch (cadastrar({
    nome, telefone, email,
    id: 9
  }))
  navigate('/')
}

  return (

    <Form onSubmit={cadastrarContato}>
    <Nome value={nome} onChange={evento => setNome(evento.target.value)} as="textarea" placeholder="Nome">{nome}</Nome>
    <Telefone  value={telefone} onChange={evento => setTelefone(evento.target.value)} as="textarea" placeholder="Telefone" >{telefone}</Telefone>
    <Email  value={email} onChange={evento => setEmail(evento.target.value)} as="textarea" placeholder="Email">{email}</Email>
    <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
    </Form>

  )
  }

export default Formulario
