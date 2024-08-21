import { FormEvent, useState } from 'react'
import styled from 'styled-components'

type Props = {
  aoPesquisar: (termo: string) => void
}

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background-color: var(--cor-secundaria);
  border-radius: 12px;
  margin-bottom: 24px;
`

const Input = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 16px;
  margin-right: 8px;
  border: 1px solid var(--cor-borda);
  border-radius: 4px;
`

const Button = styled.button`
  height: 35px;
  padding: 8px 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  background-color: var(--cor-principal);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
`

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Form onSubmit={aoEnviarForm}>
      <Input
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Button type="submit">Pesquisar</Button>
    </Form>
  )
}

export default FormVagas
