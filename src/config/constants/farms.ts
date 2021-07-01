import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'KITTY-BNB LP',
    lpAddresses: {
      97: '0xFFf8f852B2e06e698a60c0c50484D5af9eF5687d',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
    },
    tokenSymbol: 'KITTY',
    tokenAddresses: {
      97: '0xFAdef35718Ab13DE5dB264241BAf2283fF23c3aE',
      56: '0x70f98cc678f1b7282f26acbefcd099f4e02af527',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'KITTY-BUSD LP',
    lpAddresses: {
      97: '0x925a465efc42699fef696afd81587ebce9540127',
      56: '0xf0df9372b004463468ac7c101a4cea7f666c8bd9',
    },
    tokenSymbol: 'KITTY',
    tokenAddresses: {
      97: '0xFAdef35718Ab13DE5dB264241BAf2283fF23c3aE',
      56: '0x70f98cc678f1b7282f26acbefcd099f4e02af527',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: -1,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
      56: '0xf0df9372b004463468ac7c101a4cea7f666c8bd9',
    },
    tokenSymbol: QuoteToken.BNB,
    tokenAddresses: contracts.wbnb,
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
