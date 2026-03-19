// import { Routes,Route } from "react-router-dom";
// import {MusicRecords} from "./MusicRecords"
// import{Login} from "./Login"
// import{EditsMusicRecords} from "./EditsMusicRecords"

// export const MainRoutes=()=>{
//     return(
//         <Routes>
//             <Route path="/" element={<MusicRecords />}></Route>
//             <Route path="/ login" element={<Login/>}></Route>
//             <Route path="/edits_music" element={<EditsMusicRecords/>}></Route>
//             <Route path="/*" element={<h1>Page not Found....</h1>}></Route>
//         </Routes>
//     )
// }


import { Route, Routes } from "react-router-dom";

import { MusicRecord } from "./MusicRecord";
import { Login } from "./Login";
// import { EditMusicRecords } from "./EditsMusicRecord";
import { SingleMusicRecord } from "./SingleMusicRecord";
import { ReqAuth } from "../Components/ReqAuth";
import { EditMusicRecords } from './EditsMusicRecords';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<MusicRecord />}
      ></Route>
      <Route
        path="/login"
        element={<Login />}
      ></Route>
      <Route
        path="/music/:id"
        element={<SingleMusicRecord />}
      ></Route>
      <Route
        path="/music/:id/edit_music"
        element={
          <ReqAuth>
            <EditMusicRecords />
          </ReqAuth>
        }
      ></Route>
      <Route
        path="*"
        element={<h1>Page not found...</h1>}
      ></Route>
    </Routes>
  );
};