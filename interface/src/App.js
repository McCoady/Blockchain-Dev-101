import './App.css';
import { useState } from 'react';
import Navbar from './Navbar';
import './custom.scss';
import { ethers } from 'ethers';
import InitialRelease from './artifacts/contracts/InitialRelease.sol/InitialRelease.json';

const initialReleaseAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const bilditAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"
const tokenName = "Bildit";

function App() {
  const [username, setUsernameValue] = useState('')

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function joinDrop() {
    if (!username) return
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(initialReleaseAddress, InitialRelease.abi, signer)
      const optIn = await contract.joinDrop(username);
      setUsernameValue('')
      await optIn.wait();
      console.log(`200BILD successfully sent`)
    }
  }


  return (
    <div className="App">
      <Navbar />
      <div className="container align-items-start" id="Main">
        <div className="border rounded-top border-light pt-2" id="Info">
          <h2>{tokenName} blockchain-dev-101</h2>
          <button className='btn btn-dark'>Clicky</button>
          <p className="px-2">{tokenName} is a community focused on educating future blockchain developers and giving them opportunities to network with other developers and work on ideas.</p>
          <p className="px-2">{tokenName} community members are building an ecosystem to help onboard new devs and give people interesting projects to work on to strengthen their portfolios.</p>
          <br />
          <h2>{tokenName.toUpperCase()} TOKEN</h2>
          <p className="px-2">The Blockchain Dev 101 {tokenName} ERC20 token ($BILD) will be released on the Ropsten Ethereum test network.</p>
          <p className="px-2">This token will be used as a de facto scoreboard for a users contribution to the Blockchain Dev 101 discord group and its on-chain ecosystem. </p>
        </div>
        <div className="border rounded-bottom border-light pb-2" id="Airdrop">
          <p className="pt-2">Redeem 200BILD tokens before the end of August.</p>
          <button type="button" className="btn btn-lg btn-primary mb-2" onClick={joinDrop}>Join Airdrop</button>
          <div className="input-group my-4">
            <button className="btn btn-primary" type="button" id="button-addon1" onClick={joinDrop}>Set username</button>
            <input onChange={e => setUsernameValue(e.target.value)} value={username} type="text" className="form-control" placeholder="Username" aria-label="input field with button addon" aria-describedby="button-addon1" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
