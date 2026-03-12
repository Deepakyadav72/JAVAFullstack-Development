import { Routes,Route } from "react-router-dom";
import {MusicRecords} from "./MusicRecords"
import{Login} from "./Login"
import{EditsMusicRecords} from "./EditsMusicRecords"

export const MainRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<MusicRecords />}></Route>
            <Route path="/ login" element={<Login/>}></Route>
            <Route path="/edits_music" element={<EditsMusicRecords/>}></Route>
            <Route path="/*" element={<h1>Page not Found....</h1>}></Route>
        </Routes>
    )
}