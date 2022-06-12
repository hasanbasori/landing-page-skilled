import React from 'react';
import styled from 'styled-components';

const ContentStyle = styled.div`
  width: 100%;
  height: 100%;
  color: black;
`;
function Content({ children }) {
  return <ContentStyle>{children}</ContentStyle>;
}

export default Content;
