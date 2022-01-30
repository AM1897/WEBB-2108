import './NavBar.css'
import { Link } from "react-router-dom";
import RoutingPath from '../../utils/router/RoutingPath'

export default function NavBar(){
    return(
        <nav className='grid-container'>
            <section>
                <ul>
                    <li><Link to={RoutingPath.home}>Home</Link></li>
                    <li><Link to={RoutingPath.album}>Album</Link></li>
                    <li><Link to={RoutingPath.erbjudande}>Erbjudande</Link></li>
                    <li><Link to={RoutingPath.julklappar}>Julklappar</Link></li>
                    <li><Link to={RoutingPath.nyheter}>Nyheter</Link></li>
                    <li><Link to={RoutingPath.topplistor}>Topplistor</Link></li>
                </ul>
            </section>
        </nav>
    )
}