import { Config } from './types'

export const config : Config = {
  bonderFeeBps: {
    USDC: {
      ethereum: 0,
      consensys: 0
    },
    ETH: {
      ethereum: 0,
      consensys: 0
    }
  },
  destinationFeeGasPriceMultiplier: 1,
  relayerFeeEnabled: {
    consensys: false
  }
}
