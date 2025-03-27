import styled from "styled-components";

export function History() {
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
            <tr>
              <td>Conserto de débitos técnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <span className="status done">Concluído</span>
              </td>
            </tr>
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
