//https://github.com/aragon/use-wallet
import { useWallet, UseWalletProvider } from 'use-wallet';
import './Connect.css';

const Connect = () => {

    const wallet = useWallet()

    const connectWallet = async (e) => {
        e.preventDefault()
        await wallet.connect()
    }
    return (
        <nav className="navbar navbar-dark bg-dark Connect">
            <div className="container justify-content-end">
                <button className='btn btn-lg btn-secondary mt-2' onClick={connectWallet}>Connect Wallet</button>
            </div>
        </nav>
    )
}
export default () => (
    <UseWalletProvider
        chainId={3}
        connectors={{
            // This is how connectors get configured
            provided: { provider: window.cleanEthereum },
        }}>
        <Connect />
    </UseWalletProvider>
)
