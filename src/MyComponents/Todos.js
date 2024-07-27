import React from 'react'
import Todoitem from './Todoitem';
import { useEffect, useState } from 'react';
import { WalletConnectWallet, WalletConnectChainID } from '@tronweb3/walletconnect-tron';
import Web3Modal from 'web3modal';



const Todos = (props) => {
  const [tronWebAddress, setTronWebAddress] = useState('');

  useEffect(() => {
    const obj = setInterval(() => {
      if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
        clearInterval(obj);
        setTronWebAddress(window.tronWeb.defaultAddress.base58);
      }
    });

    return () => clearInterval(obj); // Cleanup interval on component unmount
  }, []);

  
  

  const handleClick = async() => {
    if (tronWebAddress) {
      // alert(`Yes, catch it: ${tronWebAddress}`);
      var tronweb =await window.tronWeb
      const balanceInSun = await tronweb.trx.getBalance(tronWebAddress);
      console.log('sfd',balanceInSun);
      console.log('tronweb',tronweb);
    } else {
      alert('TronWeb address not found yet, please try again.');
    }
  };
  const wallet = new WalletConnectWallet({
    network: WalletConnectChainID.Mainnet,
    options: {
      relayUrl: 'wss://relay.walletconnect.com',
      projectId: 'd766efba775d9b20de72903895f90ac1',  // Replace with your actual project ID
      metadata: {
        name: 'My Website',
        description: 'My Website description',
        url: 'http://localhost:3000',
        icons: ['https://avatars.mywebsite.com/']
      }
    },
    web3ModalConfig: {
      themeMode: 'dark',
      themeVariables: {
        '--w3m-z-index': 1000
      },
      explorerRecommendedWalletIds: [
          WalletConnectChainID.Mainnet,
          WalletConnectChainID.Shasta,
          WalletConnectChainID.Nile
      ]
    }
  });
  const connect = async () => {
    console.log('werew',typeof WalletConnectChainID.Mainnet);
    console.log('wallet',wallet);
    console.log('WalletConnectChainID',WalletConnectChainID);
    try {
      console.log('Attempting to connect wallet...');
      const { address } = await wallet.connect();
      console.log('Wallet Address:', address);
    } catch (error) {
      console.error('Error connecting wallet:', error);
      if (error.response) {
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
      }
    }
  };
  return (
    <div className='container row mx-auto'>

       <h3 className='text-center'>Todos List</h3>
        <h1>{props.todos.length}</h1>
       {props.todos.length===0? "No Todos to display":
        props.todos.map((todo)=>{
            return (
                <Todoitem todo={todo} key={todo.sno}/>
            )
            
        })
        }
      <button onClick={handleClick}>Connect Tron wallet?</button>
      <button onClick={connect}>Connect Wallet</button>

    </div>
  )
}

export default Todos
