export interface CycleProps {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

export interface CycleStateProps {
  cycles: CycleProps[];
  activeCycleId: string | null;
}

interface AppContextProps {
  cycles: CycleProps[];
  activeCycle?: CycleProps;
  amountSecondsPassed: number;
  handleFinishCycle(): void;
  handleSetAmountSecondsPassed(seconds: number): void;
  handleSetCycles(newCycle: CycleProps): void;
  handleInterruptCycle(): void;
}

interface AppProviderProps {
  children: React.ReactNode;
}
