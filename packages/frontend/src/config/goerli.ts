import { goerli as goerliAddresses } from '@hop-protocol/core/addresses'
import { goerli as goerliNetworks } from '@hop-protocol/core/networks'
import { HopAddresses, Networks } from './interfaces'

export const addresses: HopAddresses = {
  governance: {
    l1Hop: '',
    stakingRewardsFactory: '',
    stakingRewards: '',
    governorAlpha: '',
  },
  tokens: goerliAddresses.bridges,
  bonders: goerliAddresses.bonders,
}

const _networks = goerliNetworks as any

export const networks: Networks = {
  ethereum: {
    networkId: _networks.ethereum.networkId,
    rpcUrl: _networks.ethereum.publicRpcUrl,
    fallbackRpcUrls: _networks.ethereum.fallbackPublicRpcUrls,
    explorerUrl: _networks.ethereum.explorerUrls[0],
    nativeBridgeUrl: _networks.ethereum.nativeBridgeUrl,
    waitConfirmations: _networks.ethereum.waitConfirmations
  },
  consensys: {
      networkId: _networks.consensys.networkId,
      rpcUrl: _networks.consensys.publicRpcUrl,
      fallbackRpcUrls: _networks.consensys.fallbackPublicRpcUrls,
      explorerUrl: 'localhost:4000',
      waitConfirmations: _networks.consensys.waitConfirmations      
  }
}
