// Шаблоны
import Profile from "../../modules/layout/profile";
import Layout from "../../modules/layout/main";
import StudRegLog from "../../modules/layout/studRegLog";

// Ошибки
import Errors from "../../modules/quest/errors/error";

// Гость
import Main from "../../modules/quest/main/view";
import Login from "../../modules/quest/login/view";
import Register from "../../modules/quest/register/view";
import StudentLogin from "../../modules/quest/student/student";
import StudentRegister from "../../modules/quest/student/view";

// Супер админ
import ListAdmin from "../../modules/superAdmin/list-admin/view";
import Feedback from "../../modules/superAdmin/feedback/view"
import StatisticsMany from "../../modules/superAdmin/statisticsMany/view";
import StatisticsUsers from "../../modules/superAdmin/statisticsUsers/view";
import StatisticsCourses from "../../modules/superAdmin/courses/view";

// Админ
import AdminAbout from "../../modules/About/index";
import AdminStatisticsUsers from "../../modules/admin/statisticsUsers/view";
import AdminCourses from "../../modules/admin/courses/catalog";
import AdminCoursesForm from "../../modules/admin/courses/form";
import AdminStatisticsMany from "../../modules/admin/statisticsMany/view";

import CoursesShow from "../../modules/admin/courses/show";
import AdminCoursesEditForm from "../../modules/admin/courses/edit";

// методисты
import MetodistiCatalog from "../../modules/admin/metodisti/catalog";
import MetodistCreare from "../../modules/admin/metodisti/create";
import MetodistUpdate from "../../modules/admin/metodisti/update";


// Уроки
import LessonsCatalog from "../../modules/Lessonse/catalog";
import LessonsCreate from "../../modules/Lessonse/create";
import LessonsUpdate from "../../modules/Lessonse/update";

// Конструктор
import DesignerIndex from "../../modules/Designer/index";
import Testpages from "../../modules/Designer/testPages";

// Покупка
import Pay from "../../modules/Pay/view";
import StidentCourses from "../../modules/Student/index";

export {
    Errors,
    Layout,
    Main,
    Login,
    Register,
    Profile,
    ListAdmin,
    Feedback,
    StatisticsMany,
    StatisticsUsers,
    StatisticsCourses,
    AdminStatisticsUsers,
    AdminCourses,
    AdminStatisticsMany,
    AdminCoursesForm,
    CoursesShow,
    AdminCoursesEditForm,
    MetodistiCatalog,
    MetodistCreare,
    MetodistUpdate,
    LessonsCatalog,
    DesignerIndex,
    Testpages,
    LessonsCreate,
    LessonsUpdate,
    StudentLogin,
    StudentRegister,
    StudRegLog,
    Pay,
    AdminAbout,
    StidentCourses
}
