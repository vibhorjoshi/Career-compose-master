// walletService.ts
import Web3 from 'web3';

export const connectWallet = async() => {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        return accounts[0];
    } else {
        alert('Please install a web3 wallet like MetaMask');
    }
};