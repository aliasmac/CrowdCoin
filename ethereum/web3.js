import Web3 from 'web3'

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
  window.web3.currentProvider.enable();
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/6f5c5c9b2a1147c2a8f3a971c3140afc'
  )
  web3 = new Web3(provider);  

}

export default web3;
