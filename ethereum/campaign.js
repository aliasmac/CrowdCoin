import web3 from './web3'
import Campaign from './build/Campaign.json'

export default (address) => {
  const abi = JSON.parse(Campaign.interface)
  const campaignAddress = address
  return new web3.eth.Contract(abi, campaignAddress)
}

