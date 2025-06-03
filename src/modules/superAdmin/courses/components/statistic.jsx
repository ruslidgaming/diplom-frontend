
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';
const LineChart = observer(({ data }) => {
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