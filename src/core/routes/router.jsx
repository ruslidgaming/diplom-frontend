import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { RequireAuth } from "../hoc/RequireAuth";
import { Errors, Layout, Main, Login, Register, Profile, ListAdmin } from './pages'

const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path="/" element={<Layout />} >
            <Route index element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Route>

        <Route path="profile/" element={
            <RequireAuth role={['user']}>
                <Profile />
            </RequireAuth>
        } >

            <Route path="listadmin" element={<ListAdmin />} />

        </Route>

        <Route path='*' element={<Navigate to={"/error/404"} />} />
        <Route path='error/:codeNum' element={<Errors />} />

    </Route>
))
export default router;