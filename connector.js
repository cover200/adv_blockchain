import Web3 from 'web3'

const contractHost = 'http://localhost:7540' // <-- Host ที่เราได้ Deploy Contract ขึ้นไปครับ

let web3

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider(contractHost));
}