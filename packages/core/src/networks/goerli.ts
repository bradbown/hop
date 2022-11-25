import { Networks } from './types'
import { chains } from '../metadata'

export const networks: Networks = {
  ethereum: {
    name: chains.ethereum.name,
    networkId: 5,
    publicRpcUrl: 'https://goerli.infura.io/v3/84842078b09946638c03157f83405213', // from ethers
    fallbackPublicRpcUrls: [],
    explorerUrls: ['https://goerli.etherscan.io'],
    waitConfirmations: 1
  },
  consensys: {
    name: chains.consensys.name,
    networkId: 18021982,
    publicRpcUrl: 'localhost:8545',
    fallbackPublicRpcUrls: [],
    explorerUrls: ['http://localhost:4000'],
    waitConfirmations: 1
  }
}
