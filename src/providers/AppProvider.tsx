import { ReactNode, useReducer, useState } from "react";
import { CycleProps } from "../@types/context";
import { AppContext } from "./useContext";
import { ActionTypes, cyclesReducers } from "../reducers/cycles";

interface AppProviderProps {
  children: ReactNode;
}
export const AppProvider = ({ children }: AppProviderProps) => {
  const [cyclesState, dispatch] = useReducer(cyclesReducers, {
    cycles: [],
    activeCycleId: null,
  });

  const { cycles, activeCycleId } = cyclesState;
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const handleFinishCycle = () => {
    dispatch({
      type: ActionTypes.FINISH_CYCLE,
    });
  };
  const handleSetCycles = (newCycle: CycleProps) => {
    dispatch({
      type: ActionTypes.ADD_CYCLE,
      payload: { newCycle },
    });

    setAmountSecondsPassed(0);
  };

  const handleInterruptCycle = () => {
    dispatch({
      type: ActionTypes.INTERRUPT_CYCLE,
    });
  };

  const handleSetAmountSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds);
  };

  return (
    <AppContext.Provider
      value={{
        cycles,
        activeCycle,
        amountSecondsPassed,
        handleFinishCycle,
        handleSetAmountSecondsPassed,
        handleSetCycles,
        handleInterruptCycle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
