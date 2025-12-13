/* eslint-disable no-unused-vars */

import { Routes, Route, Link } from 'react-router-dom'
import { HomePage } from '../../Routes/src/Components/Home'
import { About } from '../../Routes/src/Components/About'
import { Contact } from '../../Routes/src/Components/Contact'
import { Login } from '../../Routes/src/Components/Login'
import { SinglePage } from '../../Routes/src/Pages/singlePage'
import { User } from '../../Routes/src/Components/User'
import { NotFoundPage } from '../Components/NotFoundPages'
import { PrivateRoute } from '../Components/PrivetRoute'


export const AllRoutes = () => {
    return <>
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/users' element={<PrivateRoute><User /></PrivateRoute>}></Route>
            <Route path='users/:id' element={<PrivateRoute><SinglePage /></PrivateRoute>}></Route>
            <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
    </>
}