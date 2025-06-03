export const platformStats = {
    // Настройки графиков
    chartOptions: {
        line: {
            chart: { type: 'bar' },
            stroke: { width: 3, curve: 'smooth' },
            colors: ['#1e5eff', '#00e396', '#ff4560'],
            markers: { size: 5 },
            tooltip: {
                shared: true,
                y: { formatter: (val) => `${val} новых` }
            }
        },
        bar: {
            chart: { type: 'bar' },
            plotOptions: { bar: { borderRadius: 4, columnWidth: '70%' } },
            colors: ['#1e5eff']
        }
    },

    // Данные по регистрациям (только новые)
    admins: {
        daily: {
            series: [{
                name: 'Доход от экспертов',
                data: [1, 0, 2, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
            }],
            xaxis: {
                categories: ['01.06', '02.06', '03.06', '04.06', '05.06', '06.06', '07.06', '08.06', '09.06', '10.06', '11.06', '12.06', '13.06', '14.06']
            }
        },
        weekly: {
            series: [{
                name: 'Доход от экспертов',
                data: [2, 1, 3, 2, 1, 4, 2, 3],
            }],
            xaxis: {
                categories: [...Array(8)].map((_, i) => `Неделя ${i + 1}`)
            }
        },
        monthly: {
            series: [{
                name: 'Доход от экспертов',
                data: [2, 1, 3, 2, 1, 4, 2, 3],
            }],
            xaxis: {
                categories: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
            }
        },
        yearly: {
            series: [{
                name: 'Доход от экспертов',
                data: [2, 1, 3, 2, 1, 4, 2, 3],
            }],
            xaxis: {
                categories: ['2021', '2022', '2023', '2024']
            }
        },
    },
    mentors: {
        daily: {
            series: [{
                name: 'Доход от экспертов',
                data: [5, 7, 3, 8, 6, 4, 9, 5, 7, 6, 8, 5, 4, 12],
            }],
            xaxis: {
                categories: [...Array(14)].map((_, i) => `${i + 1}.06`)
            }
        },
        weekly: {
            series: [{
                name: 'Доход от экспертов',
                data: [15, 20, 18, 22, 25, 19, 23, 26, 24, 27, 25, 28],
            }],
            xaxis: {
                categories: [...Array(8)].map((_, i) => `Неделя ${i + 1}`)
            }

        },
        monthly: {
            series: [{
                name: 'Доход от экспертов',
                data: [15, 20, 18, 22, 25, 19, 23, 26, 24, 27, 25, 28],
            }],
            xaxis: {
                categories: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
            }

        },
        yearly: {
            series: [{
                name: 'Доход от экспертов',
                data: [15, 20, 18, 22, 25, 19, 23, 26, 24, 27, 25, 28],
            }],
            xaxis: {
                categories: ['2021', '2022', '2023', '2024']
            }

        }
    },
    users: {
        daily: {
            series: [{
                name: 'Доход от экспертов',
                data: [210, 240, 180, 250, 290, 270, 230, 310, 280, 300, 290, 310, 295, 324],
            }],
            xaxis: {
                categories: [...Array(14)].map((_, i) => `${i + 1}.06`)
            }

        },
        weekly: {
            series: [{
                name: 'Доход от экспертов',
                data: [210, 240, 180, 250, 290, 270, 230, 310, 280, 300, 290, 310, 295, 324],
            }],
            xaxis: {
                categories: [...Array(8)].map((_, i) => `Неделя ${i + 1}`)
            }

        },
        monthly: {
            series: [{
                name: 'Доход от экспертов',
                data: [210, 240, 180, 250, 290, 270, 230, 310, 280, 300, 290, 310, 295, 324],
            }],
            xaxis: {
                categories: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
            }

        },
        yearly: {
            series: [{
                name: 'Доход от экспертов',
                data: [3000, 4200, 3800, 4500],
            }],
            xaxis: {
                categories: ['2021', '2022', '2023', '2024']
            }

        }
    },

    cards: {
        admins: {
            total: 45,
        },
        mentors: {
            total: 158,
        },
        users: {
            total: 9824,
        }
    }
};