import logoIgnite from "../assets/logo-ignite.svg";
import { Scroll, Timer } from "phosphor-react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="logo" />
      <nav>
        <NavLink to="/" title="Temporizador">
          <Timer size={28} />
        </NavLink>
        <NavLink to="history" title="Histórico">
          <Scroll size={28} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;
    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.colors["gray-100"]};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${({ theme }) => theme.colors["green-500"]};
      }
      &.active {
        color: ${({ theme }) => theme.colors["green-500"]};
      }
    }
  }
`;
