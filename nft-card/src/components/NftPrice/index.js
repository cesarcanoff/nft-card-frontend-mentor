import React from 'react'
import { ContainerNftPrice, TextEthereum } from './styles'
import iconEthereum from '../../images/icon-ethereum.svg';

export const NftPrice = ({ nftPrice }) => {
  return (
    <ContainerNftPrice>
      <img src={iconEthereum} alt="Ethereum Icon" />
      <TextEthereum>{ nftPrice } ETH</TextEthereum>
    </ContainerNftPrice>
  )
}
