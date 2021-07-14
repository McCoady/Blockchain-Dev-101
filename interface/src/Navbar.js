import './custom.scss';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" id="Nav">
            <div className="container-fluid">
                <a className="navbar-brand mb-0 h1 fs-2 text-light" href="#" id="Brand">Bildit Hub</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-secondary" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-secondary" href="#">Leaderboard</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-secondary" href="#">Roadmap</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;