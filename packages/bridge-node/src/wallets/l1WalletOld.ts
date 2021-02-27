import * as ethers from 'ethers'
import { bonderPrivateKeyOld } from 'src/config'
import { getRpcUrl } from 'src/utils'

const rpcUrl = getRpcUrl('kovan')
const l1Provider = new ethers.providers.JsonRpcProvider(rpcUrl)
const l1Wallet = new ethers.Wallet(bonderPrivateKeyOld, l1Provider)

export { l1Provider }
export default l1Wallet
