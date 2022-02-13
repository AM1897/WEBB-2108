import style from "./NavigationBar.module.css";
import {Link} from "react-router-dom";
import RoutingPath from "../../utils/routing/RoutingPath";


export default function NavigationBar() {

    return (
        <nav className={style.nav}>
            <div className={style.gridContainer}>
                <section className={style.navLinks}>
                    <ul className={style.ul}>
                        <li className={style.li}><Link to={RoutingPath.startsida}>Startsida</Link></li>
                        <li className={style.li}><Link to={RoutingPath.topplistor}>Topplistor</Link></li>
                        <li className={style.li}><Link to={RoutingPath.album}>Album</Link></li>
                        <li className={style.li}><Link to={RoutingPath.erbjudande}>Erbjudande</Link></li>
                        <div className="dropdown">
                        </div>
                    </ul>
                </section>
            </div>
        </nav>
    )
}
