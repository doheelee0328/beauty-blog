import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'

const CopyRightWrapper = styled.div`
  position: relative;
  span {
    color: ${theme.color.brown};
    font-size: 15px;
  }
`

const Copyright = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <CopyRightWrapper>
      <span>Copyright © {year} Dohee Lee</span>
    </CopyRightWrapper>
  )
}

export default Copyright
