import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { RequireAuth } from "../hoc/RequireAuth";
import { Errors, Layout, Main } from './pages'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />} >
        <Route index element={<Main />} />

        {/* <Route path="SearchOne/:idUser" element={<SearchOne />} /> */}
        {/* 
        <Route path="profile" element={
            <RequireAuth role={['user']}>
                <Profile />
            </RequireAuth>
        } /> */}

        <Route path='*' element={<Navigate to={"/error/404"} />} />
        <Route path='error/:codeNum' element={<Errors />} />
    </Route>
))
export default router;