import { Chains } from './types'
import { localhost as localhostAddresses } from '@hop-protocol/core/addresses'
import { localhost as localhostConfig } from '@hop-protocol/core/config'
import { localhost as networks } from '@hop-protocol/core/networks'

const chains: Chains = {}

for (const chain in networks) {
  const network = (networks as any)[chain] as any
  if (!chains[chain]) {
    chains[chain] = {}
  }
  chains[chain].name = network?.name
  chains[chain].chainId = network?.networkId
  chains[chain].rpcUrl = network?.publicRpcUrl
  chains[chain].explorerUrl = network?.explorerUrls?.[0]
  chains[chain].waitConfirmations = network?.waitConfirmations ?? 1
  chains[chain].fallbackRpcUrls = network?.fallbackPublicRpcUrls ?? []
}

const addresses = localhostAddresses.bridges
const bonders = localhostAddresses.bonders
const bonderFeeBps = localhostConfig.bonderFeeBps
const destinationFeeGasPriceMultiplier = localhostConfig.destinationFeeGasPriceMultiplier
const relayerFeeEnabled = localhostConfig.relayerFeeEnabled

export { addresses, chains, bonders, bonderFeeBps, destinationFeeGasPriceMultiplier, relayerFeeEnabled }
