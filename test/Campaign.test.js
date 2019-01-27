const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())

const compiledFactory = require('../ethereum/build/CampaignFactory.json')
const compiledCampaign = require('../ethereum/build/Campaign.json')

let accounts;
let factory 
let campaignAddress
let campaign 

beforeEach(async () => {
  accounts = await web3.eth.getAccounts()
  
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
  .deploy({data: compiledFactory.bytecode})
  .send({ from: accounts[0], gas: '1000000'})

  await factory.methods.createCampaign('100').send({
    from: accounts[0],
    gas: '1000000'
  });

  // ES2016 destructuring that gets the first el in returned array and assign it to the cmapaignAddress var
  [campaignAddress] = await factory.methods.getDeployedCampaigns().call()
  
  // !! campaign now exists on ethereum blockchain 
  // now we instruct web3 to create a JS representation of that contract 
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
    ) // 2 args when we want to instruct web3 to create a copy of contract that has already been deployed
})

describe('Campaigns', () => {
  it('deploys a factory and a campaign', () => {
    assert.ok(factory.options.address)
    assert.ok(campaign.options.address)
  })

  it('marks caller of createCamapign as the campaign manager', async () => {
    const manager = await campaign.methods.manager().call()
    assert.equal(accounts[0], manager)
  })

  it('allows people to contribute money and marks them as approvers', async () => {
    await campaign.methods.contribute().send({
      from: accounts[1],
      value: '200'
    })

    const isContributor = await campaign.methods.approvers(accounts[1]).call()
    assert(isContributor)

  })

  it('requires a minimum contribution', async () => {
    try {
      await campaign.methods.contribute().send({
        from: accounts[1],
        value: '5'
      })
      assert(false)
    } catch(err) {
      assert(err)
    }
  })

  it('allows a manager to make a payment request', async() => {
    await campaign.methods.createRequest('buy batteries', '100', accounts[3])
    .send({
      from: accounts[0],
      gas: '1000000'
    })

    const request = await campaign.methods.requests(0).call()
    assert.equal('buy batteries', request.description)

  })

  it('processes requests', async() => {
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei('10', 'ether')
    })

    await campaign.methods.createRequest('buy batteries', web3.utils.toWei('5', 'ether'), accounts[1]).send({
      from: accounts[0],
      gas: '1000000'
    })

    await campaign.methods.approveRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    })

    await campaign.methods.finaliseRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    })

    let balance = await web3.eth.getBalance(accounts[1])
    balance = web3.utils.fromWei(balance, 'ether')
    balance = parseFloat(balance)
    
    // when making a comparison, we must be aware that ganache doesn't reset accoutn blances
    // between tests, so there are no base balances for each account from which we can make a 
    // comparison.
    const accountOnebalance = await web3.eth.getBalance(accounts[0])
    console.log("account 1:", accountOnebalance)
    console.log("account 2:", balance)
   
    assert(balance > 104)

  })




})
