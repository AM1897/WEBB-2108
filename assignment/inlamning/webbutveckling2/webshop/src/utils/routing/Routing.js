import {BrowserRouter, Route, Routes} from "react-router-dom";
import RoutingPath from "./RoutingPath";
import HomeView from '../../views/homeView/HomeView';
import ContactView from '../../views/contactView/ContactView';
import AlbumView from '../../views/albumView/AlbumView';
import NewView from '../../views/newView/NewView';

export default function Routing({ children }){
    return(
        <BrowserRouter>
            { children }
            <Routes>
                <Route path={RoutingPath.hem} element={<HomeView/>}/>
                <Route path={RoutingPath.nyheter} element={<NewView/>}/>
                <Route path={RoutingPath.album} element={<AlbumView/>}/>
                <Route path={RoutingPath.kontakt} element={<ContactView/>}/>
            </Routes>
        </BrowserRouter>
    )
}