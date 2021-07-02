import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'KITTY-BNB LP',
    lpAddresses: {
      97: '0xFFf8f852B2e06e698a60c0c50484D5af9eF5687d',
      56: '0xf0df9372b004463468AC7C101A4CEA7F666C8bd9',
    },
    tokenSymbol: 'KITTY',
    tokenAddresses: {
      97: '0xFAdef35718Ab13DE5dB264241BAf2283fF23c3aE',
      56: '0x70f98CC678f1B7282f26ACbEFCD099F4e02aF527',
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
      56: '0xa397DaF443b87838EA52bf576d5aA8A7B41a6599',
    },
    tokenSymbol: 'KITTY',
    tokenAddresses: {
      97: '0xFAdef35718Ab13DE5dB264241BAf2283fF23c3aE',
      56: '0x70f98CC678f1B7282f26ACbEFCD099F4e02aF527',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'MEOW-BNB LP',
    lpAddresses: {
      97: '0xFFf8f852B2e06e698a60c0c50484D5af9eF5687d',
      56: '0x3C3dba19E68097D09E6c8f6398bC07F43926e62F',
    },
    tokenSymbol: 'MEOW',
    tokenAddresses: {
      97: '0xFAdef35718Ab13DE5dB264241BAf2283fF23c3aE',
      56: '0x98726fadc3ebc0e9006d5da04db82c45876ef464',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: -1,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: QuoteToken.BNB,
    tokenAddresses: contracts.wbnb,
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
