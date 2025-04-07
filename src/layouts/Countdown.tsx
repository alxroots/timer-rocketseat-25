import styled from "styled-components";
import { useEffect } from "react";
import { differenceInSeconds } from "date-fns";
import { useAppContext } from "../providers/useContext.ts";

export function Countdown() {
  const {
    activeCycle,
    handleFinishCycle,
    amountSecondsPassed,
    handleSetAmountSecondsPassed,
  } = useAppContext();

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        );

        if (secondsDifference >= activeCycle.minutesAmount * 60) {
          handleFinishCycle();
          clearInterval(interval);
        } else {
          handleSetAmountSecondsPassed(secondsDifference);
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [activeCycle]);

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`;
    } else {
      document.title = "Ignite Timer";
    }
  }, [minutes, seconds, activeCycle]);

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  );
}

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
