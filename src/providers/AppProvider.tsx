import { useState } from "react";
import { AppProviderProps, CycleProps } from "../@types/context";
import { AppContext } from "./useContext";

export const AppProvider = ({ children }: AppProviderProps) => {
  const [cycles, setCycles] = useState<CycleProps[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const handleFinishCycle = () => {
    setCycles((prev) =>
      prev.map((cycle) =>
        cycle.id === activeCycleId
          ? { ...cycle, finishedDate: new Date() }
          : cycle,
      ),
    );
  };
  const handleSetCycles = (newCycle: CycleProps) => {
    setCycles((prev) => [...prev, newCycle]);
    setActiveCycleId(newCycle.id);
    setAmountSecondsPassed(0);
  };

  const handleInterruptCycle = () => {
    setCycles((prev) =>
      prev.map((cycle) =>
        cycle.id === activeCycleId
          ? { ...cycle, interruptedDate: new Date() }
          : cycle,
      ),
    );
    setActiveCycleId(null);
  };

  const handleSetAmountSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds);
  };

  return (
    <AppContext.Provider
      value={{
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
