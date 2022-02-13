import {BrowserRouter, Route, Routes} from "react-router-dom";
import RoutingPath from "./RoutingPath";
import StartsidaView from '../../views/startsidaView/StartsidaView';
import ErbjudandeView from '../../views/erbjudandeView/ErbjudandeView';
import AlbumView from '../../views/albumView/AlbumView';
import TopplistorView from '../../views/newView/NewView';

export default function Routing({ children }){
    return(
        <BrowserRouter>
            { children }
            <Routes>
                <Route path={RoutingPath.startsida} element={<StartsidaView/>}/>
                <Route path={RoutingPath.topplistor} element={<TopplistorView/>}/>
                <Route path={RoutingPath.album} element={<AlbumView/>}/>
                <Route path={RoutingPath.erbjudande} element={<ErbjudandeView/>}/>
            </Routes>
        </BrowserRouter>
    )
}