import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  width: 100%;
  height: 120px;
  background-color: #13183f;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
function Footer({ children }) {
  return <FooterStyle>{children}</FooterStyle>;
}

export default Footer;
