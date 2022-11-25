type Bps = {
  ethereum?: number
  polygon?: number
  gnosis?: number
  optimism?: number
  arbitrum?: number
  consensys?: number
}

export type Fees = {
  USDC?: Bps
  USDT?: Bps
  DAI?: Bps
  MATIC?: Bps
  ETH?: Bps
  WBTC?: Bps
  HOP?: Bps
  SNX?: Bps
  sUSD?: Bps
}

type RelayerFee = {
  polygon?: boolean
  gnosis?: boolean
  optimism?: boolean
  arbitrum?: boolean
  consensys?: boolean
}

export type Config = {
  bonderFeeBps: Fees
  destinationFeeGasPriceMultiplier: number
  relayerFeeEnabled: RelayerFee
}
