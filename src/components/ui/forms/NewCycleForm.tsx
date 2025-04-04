import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import { useAppContext } from "../../../providers/useContext.ts";

export function NewCycleForm() {
  const { activeCycle } = useAppContext();
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        type="text"
        placeholder="De um nome para o seu projeto"
        list="task-suggetions"
        disabled={!!activeCycle}
        {...register("task")}
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
        placeholder="00"
        step={5}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  );
}

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
