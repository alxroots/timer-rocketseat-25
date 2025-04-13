import styled from "styled-components";
import { useAppContext } from "../providers/useContext.ts";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function History() {
  const { cycles } = useAppContext();
  return (
    <HistoryContainer>
      <h1>My history</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles?.map((cycle, index) => (
              <tr key={index}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>
                <td>
                  {cycle.finishedDate && (
                    <Status progress="done">Concluído</Status>
                  )}
                  {cycle.interruptedDate && (
                    <Status progress="interrupted">Interrompido</Status>
                  )}
                  {!cycle.finishedDate && !cycle.interruptedDate && (
                    <Status progress="inProgress">Em andamento</Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}

const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors["gray-100"]};
  }
`;

const STATUS_PROGRESS = {
  done: "green-500",
  inProgress: "yellow-500",
  interrupted: "red-500",
} as const;

interface StatusProps {
  progress: keyof typeof STATUS_PROGRESS;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background-color: ${(props) =>
      props.theme.colors[STATUS_PROGRESS[props.progress]]};
  }
`;

const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    th {
      background-color: ${(props) => props.theme.colors["gray-600"]};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme.colors["gray-100"]};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }
    td {
      background-color: ${(props) => props.theme.colors["gray-700"]};
      border-top: 4px solid ${(props) => props.theme.colors["gray-800"]};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;
