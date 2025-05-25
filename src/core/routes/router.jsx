import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { RequireAuth } from "../hoc/RequireAuth";
import {
    Errors, Layout, Main, Login, Register, Profile, ListAdmin, Feedback, StatisticsMany, StatisticsUsers, StatisticsCourses,
    AdminStatisticsUsers, AdminCourses, AdminStatisticsMany, AdminCoursesForm, CoursesShow, AdminCoursesEditForm
} from './pages'

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

            <Route path="admin/courses/catalog" element={<StatisticsCourses />} />
            <Route path="adminusers" element={<StatisticsUsers />} />
            <Route path="listadmin" element={<ListAdmin />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="many" element={<StatisticsMany />} />
        </Route>

        <Route path="admin/" element={
            <RequireAuth role={['user']}>
                <Profile />
            </RequireAuth>
        } >
            <Route path="courses/form" element={<AdminCoursesForm />} />
            <Route path="courses/edit/:idCourse" element={<AdminCoursesEditForm />} />
            <Route path="courses" element={<AdminCourses />} />
            <Route path="metodists" element={<AdminStatisticsUsers />} />
            <Route path="many" element={<AdminStatisticsMany />} />
            <Route path="lessons" element={<AdminStatisticsUsers />} />
            <Route path="courses/show/:idCourse" element={<CoursesShow />} />
        </Route>


        <Route path='*' element={<Navigate to={"/error/404"} />} />
        <Route path='error/:codeNum' element={<Errors />} />
    </Route>
))
export default router;