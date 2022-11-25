import { Networks } from './types'
import { chains } from '../metadata'

export const networks: Networks = {
  ethereum: {
    name: chains.ethereum.name,
    networkId: 19940131,
    publicRpcUrl: 'localhost:8445', // from ethers
    fallbackPublicRpcUrls: [],
    explorerUrls: ['https://goerli.etherscan.io'],
    waitConfirmations: 1
  },
  consensys: {
    name: chains.consensys.name,
    networkId: 59140,
    publicRpcUrl: 'localhost:8545',
    fallbackPublicRpcUrls: [],
    explorerUrls: ['http://localhost:4000'],
    waitConfirmations: 1
  }
}
