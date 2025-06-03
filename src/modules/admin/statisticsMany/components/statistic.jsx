// import React from 'react';
// import Chart from 'react-apexcharts';

// const LineChart = () => {
//     const options = {
//         chart: {
//             type: 'line',
//         },
//         series: [{
//             name: 'sales',
//             data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
//         }],
//         colors: ['#1e5eff'],
//         xaxis: {
//             categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
//         },
//     };

//     return (
//         <Chart
//             options={options}
//             series={options.series}
//             type="line"
//             height={350}
//         />
//     );
// };

// export default LineChart;


import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';
const LineChart = observer(({ data }) => {
    // const options = {
    //     chart: {
    //         type: 'line',
    //     },
    //     series: [{
    //         name: 'sales',
    //         data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    //     }],
    //     colors: ['#1e5eff'],
    //     xaxis: {
    //         categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    //     },
    // };


    const options = {
        chart: {
            type: data.chart.type,
        },
        series: data.series,
        colors: ['#1e5eff'],
        xaxis: data.xaxis
    };

    return (data &&
        <Chart
            options={options}
            series={options.series}
            type={'line'}
            height={350}
        />
    );
});

export default LineChart;