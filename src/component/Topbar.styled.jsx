import styled from 'styled-components'
import { theme } from '../theme'
export const TopBarScrollWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: ${theme.color.white};
  width: 100%;
  height: 30vh;
  z-index: 999;
  display: flex;
  flex-direction: column;
`
