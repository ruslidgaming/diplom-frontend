export const UserRoutes = {
  Register: "/admin/register",
  AdminLogin: "/admin/login",
  StudentLogin: '/student/login',
  StudentRegister: '/student/register',
  Logout: '/admin/logout',
}

export const FeedbackRoute = {
  SetFeedbak: '/feedback',
  Delete: '/feedback/delete'
}

export const MentorRoutes = {
  MentorLogin: '/mentor/login',
  MentorCreate: '/mentor/create',
  MentorUpdate: '/mentor/update',
  MentorCatalog: '/mentor/catalog',
  Delete: '/mentor/delete',
  Edit: '/mentor/edit',
  CourseDelete: '/mentor/course/delete',
  CourseAdd: '/mentor/course/add',
  Catalog: '/mentor/course',
}

export const CourseRoute = {
  Create: "/course/add",
  Update: "/course/update",
  Delete: "/course/delete",
  TeacherDelete: "/admin/course/teacher/delete",
  Show: "/admin/course/show",
  Catalog: "/admin/course/catalog",

}

export const Lessons = {
  Catalog: '/lessons/catalog',
  Show: '/lessons/show',
  Create: '/lessons/create',
  Update: '/lessons/show',
  Edit: '/lessons/edit',
  Delete: '/lessons/delete',
  Passed: '/lessons/passed',
}

export const ListRoute = {
  Admin: '/list/admin',
  Feedback: '/list/feedback',
}
