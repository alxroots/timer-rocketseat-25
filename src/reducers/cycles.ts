import { CycleStateProps } from "../@types/context";

export enum ActionTypes {
  ADD_CYCLE = "ADD_CYCLE",
  INTERRUPT_CYCLE = "INTERRUPT_CYCLE",
  FINISH_CYCLE = "FINISH_CYCLE",
}

export function cyclesReducers(state: CycleStateProps, action: any) {
  console.log("action", action);
  switch (action.type) {
    case ActionTypes.ADD_CYCLE: {
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      };
    }
    case ActionTypes.INTERRUPT_CYCLE: {
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
    }
    case ActionTypes.FINISH_CYCLE: {
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, finishedDate: new Date() };
          }
          return cycle;
        }),
        activeCycleId: null,
      };
    }
    default:
      return state;
  }
}
