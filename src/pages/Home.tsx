import { HandPalm, Play } from "phosphor-react";
import styled from "styled-components";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Countdown } from "../layouts/Countdown.tsx";
import { NewCycleForm } from "../components/ui/forms/NewCycleForm.tsx";
import { CycleProps } from "../@types/context";
import { useAppContext } from "../providers/useContext.ts";

const newCycleFormSchema = z.object({
  task: z.string().min(1, "Informe o nome do projeto"),
  minutesAmount: z
    .number()
    .min(1, "O ciclo precisa ser de no mínimo 5 minutos")
    .max(60, "O ciclo precisa ser de no máximo 60 minutos"),
});

type NewCyclePropTypes = z.infer<typeof newCycleFormSchema>;

export function Home() {
  const { handleSetCycles, handleInterruptCycle, activeCycle } =
    useAppContext();
  const newCycleFormProps = useForm<NewCyclePropTypes>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });
  const { handleSubmit, watch, reset } = newCycleFormProps;

  const handleCreateNewCycle = (data: NewCyclePropTypes) => {
    const newCycle: CycleProps = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };
    handleSetCycles(newCycle);
    reset();
  };

  const isSubmitDisabled = !watch("task");

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleFormProps}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
        {activeCycle ? (
          <StopCountdownButton type="button" onClick={handleInterruptCycle}>
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
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

const BaseCountdownButton = styled.button`
  width: 100%;
  padding: 1rem;
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

const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme.colors["green-500"]};
  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.colors["green-700"]};
  }
`;

const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme.colors["red-500"]};
  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.colors["red-700"]};
  }
`;
