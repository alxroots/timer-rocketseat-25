import { Play } from "phosphor-react";
import styled from "styled-components";

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            type="text"
            name="task"
            placeholder="De um nome para o seu projeto"
            list="task-suggetions"
          />
          <datalist id="task-suggetions">
            <option value="Projeto Feed de Notícias" />
            <option value="Projeto de Cadastro de Produtos" />
            <option value="Projeto de Controle Financeiro" />
            <option value="Projeto de Gerenciamento de Tarefas" />
            <option value="Projeto de Agenda de Contatos" />
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            name="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />
          <span>minutos.</span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCountdownButton type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}

const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;
const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors["gray-100"]};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`;
const CountdownContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme.colors["gray-100"]};

  display: flex;
  gap: 1rem;
  span {
    background-color: ${(props) => props.theme.colors["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;
const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme.colors["green-500"]};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const StartCountdownButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors["green-500"]};
  border-radius: 8px;
  border: none;
  color: ${(props) => props.theme.colors["gray-100"]};
  font-size: 1.125rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.colors["green-700"]};
  }
`;

const BaseInput = styled.input`
  background-color: transparent;
  height: 2.5rem;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors["gray-500"]};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme.colors["gray-100"]};
  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme.colors["green-500"]};
  }
`;

const TaskInput = styled(BaseInput)`
  flex: 1;
  &::placeholder {
    color: ${(props) => props.theme.colors["gray-500"]};
  }
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
  &::placeholder {
    color: ${(props) => props.theme.colors["gray-500"]};
  }
`;
