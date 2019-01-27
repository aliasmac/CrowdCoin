import web3 from './web3'
import campaignFactory from './build/CampaignFactory.json'

const abi = JSON.parse(campaignFactory.interface)
const address = '0xf24c372883cBEa632c0104b52FE5005b2DEa2cb8'
const instance = new web3.eth.Contract(abi, address)

export default instance

