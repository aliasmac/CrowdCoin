import web3 from './web3'
import campaignFactory from './build/CampaignFactory.json'

const abi = JSON.parse(campaignFactory.interface)
const address = '0xB378e3cD938fba312c424B5d4C3DC2f8150041a7'
const instance = new web3.eth.Contract(abi, address)

export default instance

