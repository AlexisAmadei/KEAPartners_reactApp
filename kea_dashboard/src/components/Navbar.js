import "./Navbar.css"

function Navbar() {
    return (
        <div className="nav-slider">
            <nav>
                <span className="marqueur"></span>
                <ol>
                    <li>
                        <a className="lienmenu" href="#rubrique1">Mon Entreprise</a>
                    </li>
                    <li>
                        <a className="lienmenu" href="#rubrique2">Kea Objectifs</a>
                    </li>
                    <li>
                        <a className="lienmenu" href="#rubrique3"><span>Engagement</span></a>
                    </li>
                </ol>
            </nav>
        </div>
    );
  }
  
  export default Navbar;
