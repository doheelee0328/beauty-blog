import styled, { css } from 'styled-components'
export const ButtonWrapper = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  font-weight: 900;

  font-size: 18px;
  ${({ styleProps }) => css`
    background: ${styleProps.backgroundColor};
    color: ${styleProps.color};
    border: ${styleProps.border};
  `};
`
