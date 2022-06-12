import React from 'react';
import styled, { css } from 'styled-components';

const CardListStyle = styled.div`
  width: 350px;
  height: 322px;
  /* background-color: red; */
  border-radius: 15px;
  /* stroke: #979797; */
  /* border: 0.5px solid gray; */
  /* filter: drop-shadow(30px 10px 4px #4444dd); */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  ${({ cardType }) => {
    if (cardType === 1) {
      return css`
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
        padding-left: 25px;
        background: linear-gradient(#ff6f48, #f02aa6);
        color: white;
      `;
    } else if (cardType === 2) {
      return css`
        p {
          margin-right: 50px;
        }
        h5 {
          color: #f74780;
        }
        padding-left: 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        /* box-shadow: 1px 1px rgba(151, 151, 151, 1); */
      `;
    }
  }};
`;

function CardList({ children, cardType }) {
  return <CardListStyle cardType={cardType}>{children}</CardListStyle>;
}

export default CardList;
