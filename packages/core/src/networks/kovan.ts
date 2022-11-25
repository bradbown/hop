import { Networks } from './types'
import { chains } from '../metadata'

export const networks: Networks = {
  ethereum: {
    name: chains.ethereum.name,
    networkId: 42,
    publicRpcUrl: 'https://kovan.infura.io/v3/84842078b09946638c03157f83405213', // from ethers
    fallbackPublicRpcUrls: [],
    explorerUrls: ['https://kovan.etherscan.io'],
    waitConfirmations: 1
  }
}
