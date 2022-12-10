import React from 'react'
import { ContainerImage } from './style'

export const NftImage = ({ imagePath }) => {
  return (
    <ContainerImage>
      <img src={imagePath} alt="" />
    </ContainerImage>
  )
}
