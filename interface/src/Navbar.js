import './custom.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" id="Nav">
            <div className="container-fluid">
                <Link className="navbar-brand mb-0 h1 fs-1 text-secondary" to="/Blockchain-Dev-101/" id="Brand">Bildit Hub</Link>
                <button className="navbar-toggler btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Blockchain-Dev-101/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Blockchain-Dev-101/leaderboard">Leaderboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Blockchain-Dev-101/roadmap">Roadmap</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;