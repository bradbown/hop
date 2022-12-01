import { Networks } from './types'
import { chains } from '../metadata'

export const networks: Networks = {
  ethereum: {
    name: chains.ethereum.name,
    networkId: 19940131,
    publicRpcUrl: 'http://localhost:8445', // from ethers
    fallbackPublicRpcUrls: [],
    explorerUrls: ['http://localhost:4001'],
    waitConfirmations: 1
  },
  consensys: {
    name: chains.consensys.name,
    networkId: 19940131,
    publicRpcUrl: 'http://localhost:8445', // TODO: Change this back to the layer 2 node
    fallbackPublicRpcUrls: [],
    explorerUrls: ['http://localhost:4000'],
    waitConfirmations: 1
  }
}
