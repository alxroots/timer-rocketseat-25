import { useReducer, useState } from "react";
import {
  AppProviderProps,
  CycleProps,
  CycleStateProps,
} from "../@types/context";
import { AppContext } from "./useContext";

export const AppProvider = ({ children }: AppProviderProps) => {
  const [cyclesState, dispatch] = useReducer(
    (state: CycleStateProps, action) => {
      switch (action.type) {
        case "ADD_CYCLE":
          return {
            ...state,
            cycles: [...state.cycles, action.payload],
            activeCycleId: action.payload.id,
          };
        case "INTERRUPT_CYCLE":
          return {
            ...state,
            cycles: state.cycles.map((cycle) => {
              if (cycle.id === state.activeCycleId) {
                return { ...cycle, interruptedDate: new Date() };
              }
              return cycle;
            }),
            activeCycleId: null,
          };
        case "FINISH_CYCLE":
          return {
            ...state,
            cycles: state.cycles.map((cycle) => {
              if (cycle.id === action.payload) {
                return { ...cycle, finishedDate: new Date() };
              }
              return cycle;
            }),
            activeCycleId: null,
          };
        default:
          return state;
      }
    },
    {
      cycles: [],
      activeCycleId: null,
    },
  );

  const { cycles, activeCycleId } = cyclesState;
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const handleFinishCycle = () => {
    dispatch({
      type: "FINISH_CYCLE",
      payload: activeCycleId,
    });
  };
  const handleSetCycles = (newCycle: CycleProps) => {
    dispatch({
      type: "ADD_CYCLE",
      payload: newCycle,
    });

    setAmountSecondsPassed(0);
  };

  const handleInterruptCycle = () => {
    dispatch({
      type: "INTERRUPT_CYCLE",
      payload: activeCycleId,
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
