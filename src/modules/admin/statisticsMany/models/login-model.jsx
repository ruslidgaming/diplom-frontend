import { makeAutoObservable } from "mobx";
import { incomeStatistics } from "../components/dataStatistic";

class Model {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    _filterTypeAdmin = "daily"
    _filterTypeUser = "daily"
    
    _graphSectionsAdmin = {
        chart: incomeStatistics.chartOptions.line.chart,
        series: incomeStatistics.experts["daily"].series,
        xaxis: incomeStatistics.experts["daily"].xaxis,
    }
    _graphSectionsUser = {
        chart: incomeStatistics.chartOptions.line.chart,
        series: incomeStatistics.students["daily"].series,
        xaxis: incomeStatistics.students["daily"].xaxis,
    }

    get graphSectionsAdmin() {
        return this._graphSectionsAdmin;
    }

    get graphSectionsUser() {
        return this._graphSectionsUser
    }

    get filterTypeAdmin() {
        return this._filterTypeAdmin;
    }

    get filterTypeUser() {
        return this._filterTypeUser
    }

    setGraphSectionsAdmin(data) {
        this._filterTypeAdmin = data
        this._graphSectionsAdmin = {
            chart: incomeStatistics.chartOptions.line.chart,
            series: incomeStatistics.experts[data].series,
            xaxis: incomeStatistics.experts[data].xaxis,
        }
    }

    setGraphSectionsUser(data) {
        this._filterTypeUser = data
        this._graphSectionsUser = {
            chart: incomeStatistics.chartOptions.line.chart,
            series: incomeStatistics.students[data].series,
            xaxis: incomeStatistics.students[data].xaxis,
        }
    }
}

const model = new Model();
export default model;