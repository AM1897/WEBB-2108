import {BrowserRouter, Router, Route, Routes} from "react-router-dom";
import RoutingPath from './RoutingPath'
import HomeView from '../view/homeView/HomeView'
import Erbjudande from '../view/erbjudandeView/ErbudandeView'
import AlbumView from '../view/albumView/AlbumView'
import JulklapparView from '../view/julklapparView/JulklapparView'
import NyheterView from '../view/nyheterView/NyheterView'
import TopplistorView from '../view/topplistorView/ToppListorView'


export default function Routing({children}) {
    return (
        <BrowserRouter>
            {children}
            <Routes>
                <Route path={RoutingPath.home} element={<HomeView/>}/>
                <Route path={RoutingPath.erbjudande} element={<Erbjudande/>}/>
                <Route path={RoutingPath.album} element={<AlbumView/>}/>
                <Route path={RoutingPath.julklappar} element={<JulklapparView/>}/>
                <Route path={RoutingPath.nyheter} element={<NyheterView/>}/>
                <Route path={RoutingPath.topplistor} element={<TopplistorView/>}/>
            </Routes>
        </BrowserRouter>
    )
}
