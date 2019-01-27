const path = require('path');
const fs = require('fs-extra'); // includes extra functions e.g. removeSync
const solc = require('solc')

// Delete entire 'build folder' because if this script is being run, it means we want to compile the solidity contracts again, maybe because we made changes
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath)

// Read 'Camapaign.sol' from the 'contracts' folder 
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol')
const source = fs.readFileSync(campaignPath, 'utf8');

// compile both contracts with solidity compiler 
const output = solc.compile(source, 1).contracts

// write output to build directory
fs.ensureDirSync(buildPath)

for (let contract in output) { // for in loop used to iterate over keys of an {}
  fs.outputJSONSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  )
}