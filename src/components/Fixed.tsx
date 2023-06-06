import React from 'react'
import styled from 'styled-components';
import COLORS from '../const/Colors';

const StyledFixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, #4d4d4d, #333);
  z-index: 9999;
  text-align: left;
  margin: 0;
  padding: 0.5rem 1.5rem 0.75rem 1.5rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);

  & > * + * {
    margin-left: 0.5rem;
  }

  p {
    font-weight: bold;
    display: inline-block;
    color: ${COLORS.ORANGE};
    margin: 0;
    margin-right: 1rem;
  }
`

type FixedProps = {
  children: React.ReactNode,
}

export default function Fixed({ children }: FixedProps) {
  return (
    <StyledFixed>{children}</StyledFixed>
  )
}
