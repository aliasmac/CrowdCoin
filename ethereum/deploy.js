const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3')
const compiledFactory = require('./build/CampaignFactory.json')

const provider = new HDWalletProvider(
    'page moral concert glare valid want stool hundred company cinnamon image minor',
    'https://rinkeby.infura.io/v3/6f5c5c9b2a1147c2a8f3a971c3140afc'     
)

const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts()

    console.log("Attempting to dpeloy from account", accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface)) //ABI
        .deploy({ data: compiledFactory.bytecode })
        .send({from: accounts[0], gas: '1000000' })

    console.log('contract deployed to:', result.options.address)    
    0xb1f18fB8Efb2065B9A1Fb14349077B1BbF8d36fF
}
deploy()

