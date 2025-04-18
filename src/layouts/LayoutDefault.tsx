import { Header } from "./Header.tsx";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export function LayoutDefault() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background-color: ${({ theme }) => theme.colors["gray-800"]};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;
