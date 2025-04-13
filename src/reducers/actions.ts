import { ActionTypes } from "./cycles.ts";
import { CycleProps } from "../@types/context";

export function addNewCycleAction(newCycle: CycleProps) {
  return {
    type: ActionTypes.ADD_CYCLE,
    payload: { newCycle },
  };
}

export function interruptCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CYCLE,
  };
}

export function finishCycleAction() {
  return {
    type: ActionTypes.FINISH_CYCLE,
  };
}
