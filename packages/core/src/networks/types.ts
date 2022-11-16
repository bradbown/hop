export type Network = {
  name: string
  networkId: number
  publicRpcUrl?: string
  fallbackPublicRpcUrls?: string[]
  explorerUrls: string[]
  nativeBridgeUrl?: string
  waitConfirmations: number
}

export type Networks = {
  ethereum: Network
  consensys?: Network
  arbitrum?: Network
  optimism?: Network
  gnosis?: Network
  polygon?: Network
}
