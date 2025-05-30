import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${(props) => props.theme.colors["green-500"]};
  color: ${(props) => props.theme.colors.white};
`;
