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
        l2Bridge: '0xb276BC046DFf5024D20A3947475eA20C9F08eB1F',
        l1CanonicalToken: '0x',
        l2CanonicalToken: '0x'
      }
    //   polygon: {
    //     l1CanonicalBridge: '0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74',
    //     l1MessengerWrapper: '0x755569159598f3702bdD7DFF6233A317C156d3Dd',
    //     l2CanonicalBridge: '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa',
    //     l2CanonicalToken: '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa',
    //     l2Bridge: '0x34E8251051687BfF4EA23C18e466b3Ed13492abd',
    //     l2HopBridgeToken: '0xD063875762e760Ee787b11F6Af624058b4841A5a',
    //     l2AmmWrapper: '0x0e0E3d2C5c292161999474247956EF542caBF8dd',
    //     l2SaddleSwap: '0x3666f603Cc164936C1b87e207F36BEBa4AC5f18a',
    //     l2SaddleLpToken: '0x307C0fc195e1ddc927ee73856558Ab8C9297B3FB',
    //     l1FxBaseRootTunnel: '0x755569159598f3702bdD7DFF6233A317C156d3Dd',
    //     l1PosRootChainManager: '0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74',
    //     l1PosPredicate: '0xdD6596F2029e6233DEFfaCa316e6A95217d4Dc34',
    //     l2MessengerProxy: '0x13B7F51BD865410c3AcC4d56083C5B56aB38D203',
    //     bridgeDeployedBlockNumber: 27594937
    //   }
    },
    USDC: {
      ethereum: {
        l1CanonicalToken: '0x98339D8C260052B7ad81c28c16C0b98420f2B46a',
        l1Bridge: '0x7D269D3E0d61A05a0bA976b7DBF8805bF844AF3F',
        bridgeDeployedBlockNumber: 7398216
      },
      // Todo replace addresses
      consensys: {
        l2Bridge: '0xb276BC046DFf5024D20A3947475eA20C9F08eB1F',
        l1CanonicalToken: '0x',
        l2CanonicalToken: '0x'
      }
    //   polygon: {
    //     l1CanonicalBridge: '0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74',
    //     l1MessengerWrapper: '0x19B2162CA4C2C6F08C6942bFB846ce5C396aCB75',
    //     l2CanonicalBridge: '0x6D4dd09982853F08d9966aC3cA4Eb5885F16f2b2',
    //     l2CanonicalToken: '0x6D4dd09982853F08d9966aC3cA4Eb5885F16f2b2',
    //     l2Bridge: '0x3c0FFAca566fCcfD9Cc95139FEF6CBA143795963',
    //     l2HopBridgeToken: '0x5C32143C8B198F392d01f8446b754c181224ac26',
    //     l2AmmWrapper: '0xa81D244A1814468C734E5b4101F7b9c0c577a8fC',
    //     l2SaddleSwap: '0x76b22b8C1079A44F1211D867D68b1eda76a635A7',
    //     l2SaddleLpToken: '0x4a1a092BFFA8514E7F07ea3980C0be12139EFfFb',
    //     l1FxBaseRootTunnel: '0x19B2162CA4C2C6F08C6942bFB846ce5C396aCB75',
    //     l1PosRootChainManager: '0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74',
    //     l1PosPredicate: '0xdD6596F2029e6233DEFfaCa316e6A95217d4Dc34',
    //     l2MessengerProxy: '0x1990BC6dfe2ef605Bfc08f5A23564dB75642Ad73',
    //     bridgeDeployedBlockNumber: 27606309
    //   }
    }
  }
}
