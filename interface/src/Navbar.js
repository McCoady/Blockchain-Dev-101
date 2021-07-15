import './custom.scss';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" id="Nav">
            <div className="container-fluid">
                <a className="navbar-brand mb-0 h1 fs-1 text-secondary" href="#" id="Brand">Bildit Hub</a>
                <button className="navbar-toggler btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Leaderboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Roadmap</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;