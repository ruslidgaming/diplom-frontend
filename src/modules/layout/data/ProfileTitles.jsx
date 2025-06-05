export const ProfileTitles = {
    "/profile/listadmin": "Админы",
    "/profile/feedback": "Заявки",
    "/profile/many": "Статистика доходов",
    "/profile/adminusers": "Статистика по пользователям",
    "/profile/admincourses": "Статистика по курсам",
    "/admin/courses": "Каталог курсов",
    "/admin/courses/": "Каталог курсов",
    "/admin/courses/form": "Создать курс",
    "/admin/metodists/catalog": "Методисты",
    "/admin/metodists/create": "Создать методиста",
    "/admin/many": "Статистика доходов",
    "/admin/lessons": "Статистика учеников",
    "/mentor": "Каталог курсов",
    "/admin/about": "Профиль",
};

// Функция для получения заголовка с учетом динамических путей
export const getProfileTitle = (path) => {
    // Проверяем точные совпадения
    if (ProfileTitles[path]) {
        return ProfileTitles[path];
    }

    if (path.startsWith("/admin/courses/edit/")) {
        return "Редактирование курса";
    } else if (path.startsWith("/admin/metodists/edit")) {
        return "Редактирование ментора";
    } else if (path.startsWith("/lessons")) {
        return "Уроки";
    } else if (path.startsWith("/courses/show")) {
        return "Об курсе";
    } else if (path.endsWith("/pay")) {
        return "Покупка";
    }

};