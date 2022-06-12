import React from 'react';
import styled from 'styled-components';


const HeaderStyle = styled.div`
  width: 100%;
  height: 120px;
  background-color: #ffffff;
  color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
function Header({ children }) {
  return <HeaderStyle>{children}</HeaderStyle>;
}

export default Header;
