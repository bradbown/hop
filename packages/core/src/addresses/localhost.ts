import { Addresses } from './types'

export const addresses: Addresses = {
  bonders: {
    ETH: {
      ethereum: {
        consensys: '0x81682250D4566B2986A2B33e23e7c52D401B7aB7'
      },
      consensys: {
        ethereum: '0x81682250D4566B2986A2B33e23e7c52D401B7aB7'
      }
    //   polygon: {
    //     ethereum: '0x81682250D4566B2986A2B33e23e7c52D401B7aB7',
    //     optimism: '0x81682250D4566B2986A2B33e23e7c52D401B7aB7',
    //     arbitrum: '0x81682250D4566B2986A2B33e23e7c52D401B7aB7'
    //   }
    },
    USDC: {
      ethereum: {
        consensys: '0x81682250D4566B2986A2B33e23e7c52D401B7aB7'
      },
      consensys: {
        ethereum: '0x81682250D4566B2986A2B33e23e7c52D401B7aB7'
      }
    //   polygon: {
    //     ethereum: '0x81682250D4566B2986A2B33e23e7c52D401B7aB7',
    //     optimism: '0x81682250D4566B2986A2B33e23e7c52D401B7aB7',
    //     arbitrum: '0x81682250D4566B2986A2B33e23e7c52D401B7aB7'
    //   }
    }
  },
  bridges: {
    ETH: {
      ethereum: {
        l1CanonicalToken: '0x0000000000000000000000000000000000000000',
        // TODO Replace l1Bridge address
        l1Bridge: '0xC8A4FB931e8D77df8497790381CA7d228E68a41b',
        bridgeDeployedBlockNumber: 7393532
      },
      // Todo replace addresses
      consensys: {
        l1CanonicalBridge: '0x0000000000000000000000000000000000000000',
        l2Bridge: '0xb276BC046DFf5024D20A3947475eA20C9F08eB1F',
        l2CanonicalBridge: '0x4200000000000000000000000000000000000010',
        l2CanonicalToken: '0xA7d0922138510fE4d63C3a052A0FC8d9D5503ef9'
      }
    },
    USDC: {
      ethereum: {
        l1CanonicalToken: '0x3D501fCc1493492247a07e68370166a5CF897F09',
        l1Bridge: '0x3D075F3cf4726C0a0EFEE100ff0BE746596e290C',
        bridgeDeployedBlockNumber: 7398216
      },
      // Todo replace addresses
      consensys: {
        l1CanonicalBridge: '0x0000000000000000000000000000000000000000',
        l2Bridge: '0x61B314a5619fB4128714D66686ee07EcA62A3671',
        l2CanonicalBridge: '0x61B314a5619fB4128714D66686ee07EcA62A3671',
        l2CanonicalToken: '0x61B314a5619fB4128714D66686ee07EcA62A3671'
      }
    }
  }
}
