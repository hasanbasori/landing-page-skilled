import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

const ButtonStyle = styled.div`
  width: 167px;
  height: 56px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    opacity: 0.6;
    cursor: pointer;
  }
  ${({ type }) => {
    if (type === 1) {
      return css`
        background: linear-gradient(#4851ff, #f02aa6);
      `;
    } else if (type === 2) {
      return css`
        background: linear-gradient(#f02aa6, #ff6f48);
        color: white;
      `;
    } else if (type === 4) {
      return css`
        background: #13183f;
        color: white;
      `;
    } 
  }}
`;

function Button({ children, type }) {
  return <ButtonStyle type={type}>{children}</ButtonStyle>;
}

export default Button;
