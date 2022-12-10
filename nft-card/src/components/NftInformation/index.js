import React from 'react'

import { NftInformationContainer } from './styles'

export const NftInformation = ({ children }) => {
  return (
    <NftInformationContainer>
      { children }
    </NftInformationContainer>
  )
}
