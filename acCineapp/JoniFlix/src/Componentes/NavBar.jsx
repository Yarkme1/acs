import { Link } from "react-router-dom"

export default function NavBar() {
    return ( 
        <nav>
            <ul className="flex gap-3">
                <li><Link to="/"> Home</Link></li>
                <li><Link to="filmes">Filmes</Link></li>
                <li><Link to="favoritos">Favoritos</Link></li>
            </ul>
        </nav>
    )
}