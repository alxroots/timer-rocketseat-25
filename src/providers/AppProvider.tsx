import { ReactNode, useEffect, useReducer, useState } from "react";
import { CycleProps } from "../@types/context";
import { AppContext } from "./useContext";
import { cyclesReducers } from "../reducers/cycles";
import {
  addNewCycleAction,
  finishCycleAction,
  interruptCycleAction,
} from "../reducers/actions.ts";

interface AppProviderProps {
  children: ReactNode;
}
export const AppProvider = ({ children }: AppProviderProps) => {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducers,
    {
      cycles: [],
      activeCycleId: null,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        "@ignite-timer:cycles-state-1.0.0",
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }
      return {
        cycles: [],
        activeCycleId: null,
      };
    },
  );

  const { cycles, activeCycleId } = cyclesState;
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const handleFinishCycle = () => {
    dispatch(finishCycleAction());
  };
  const handleSetCycles = (newCycle: CycleProps) => {
    dispatch(addNewCycleAction(newCycle));

    setAmountSecondsPassed(0);
  };

  const handleInterruptCycle = () => {
    dispatch(interruptCycleAction());
  };

  const handleSetAmountSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds);
  };

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);
    localStorage.setItem("@ignite-timer:cycles-state-1.0.0", stateJSON);
  }, [cyclesState]);

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
