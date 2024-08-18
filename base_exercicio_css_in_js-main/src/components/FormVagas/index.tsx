import { FormEvent, useState } from 'react';
import styled from 'styled-components';

type Props = {
  aoPesquisar: (termo: string) => void;
};

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: var(--cor-fundo);
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  margin-right: 8px;
  border: 1px solid var(--cor-borda);
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  color: var(--cor-branca);
  background-color: var(--cor-principal);
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--cor-principal-hover);
  }
`;

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('');

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    aoPesquisar(termo.toLocaleLowerCase());
  };

  return (
    <Form onSubmit={aoEnviarForm}>
      <Input
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Button type="submit">Pesquisar</Button>
    </Form>
  );
};

export default FormVagas;
