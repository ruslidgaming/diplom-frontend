import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { RequireAuth } from "../hoc/RequireAuth";
import {
    Errors, Layout, Main, Login, Register, Profile, ListAdmin, Feedback, StatisticsMany, StatisticsUsers, StatisticsCourses,
    AdminStatisticsUsers, AdminCourses, AdminStatisticsMany, AdminCoursesForm, CoursesShow, AdminCoursesEditForm,
    MetodistiCatalog, MetodistCreare, MetodistUpdate,
    LessonsCatalog, StudRegLog,
    DesignerIndex, Testpages, LessonsCreate, LessonsUpdate,
    StudentLogin, StudentRegister, Pay
} from './pages'

const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path="/" element={<Layout />} >
            <Route index element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Route>


        <Route path="student" element={<StudRegLog />} >
            <Route path="login" element={<StudentLogin />} />
            <Route path="register" element={<StudentRegister />} />

            <Route path="courses" element={<StudentRegister />} />
        </Route>

        <Route path="designer" element={<DesignerIndex />} />
        <Route path="testpages" element={<Testpages />} />

        <Route path="profile/" element={
            <RequireAuth role={['super']}>
                <Profile />
            </RequireAuth>
        } >

            <Route path="admincourses" element={<StatisticsCourses />} />
            <Route path="adminusers" element={<StatisticsUsers />} />
            <Route path="listadmin" element={<ListAdmin />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="many" element={<StatisticsMany />} />
        </Route>


        <Route path="courses/show/:idCourse" element={<Profile />} >
            <Route index element={<CoursesShow />} />

            <Route path="pay" element={<Pay />} />
        </Route>

        <Route path="admin/" element={
            <RequireAuth role={['admin']}>
                <Profile />
            </RequireAuth>
        } >
            <Route path="courses/form" element={<AdminCoursesForm />} />
            <Route path="courses/edit/:idCourse" element={<AdminCoursesEditForm />} />
            <Route path="courses" element={<AdminCourses />} />
            <Route path="many" element={<AdminStatisticsMany />} />
            <Route path="lessons" element={<AdminStatisticsUsers />} />

            {/* Методисты */}
            <Route path="metodists/catalog" element={<MetodistiCatalog />} />
            <Route path="metodists/create" element={<MetodistCreare />} />
            <Route path="metodists/edit/:id" element={<MetodistUpdate />} />
        </Route>

        <Route path="mentor/" element={
            <RequireAuth role={['mentor']}>
                <Profile />
            </RequireAuth>
        } >
            <Route index element={<AdminCourses />} />
        </Route>

        <Route path="/lessons/:idCourse" element={
            <RequireAuth role={['mentor', 'admin']}>
                <Profile />
            </RequireAuth>
        } >
            <Route index element={<LessonsCatalog />} />

            <Route path="create" element={<LessonsCreate />} />
            <Route path="update/:lessonId" element={<LessonsUpdate />} />
            <Route path="show/:lessonId" element={<LessonsCatalog />} />
        </Route>

        <Route path='*' element={<Navigate to={"/error/404"} />} />
        <Route path='error/:codeNum' element={<Errors />} />
    </Route >
))
export default router;