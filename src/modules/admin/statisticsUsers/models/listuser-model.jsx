import { makeAutoObservable } from "mobx";
import { platformStats } from "../components/dataStatistic";

class Model {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    _filterTypeAdmin = "daily"
    _filterTypeMentor = "daily"
    _filterTypeUser = "daily"

    _graphSectionsAdmin = {
        chart: platformStats.chartOptions.line.chart,
        series: platformStats.admins["daily"].series,
        xaxis: platformStats.admins["daily"].xaxis,
    }
    _graphSectionsMentor = {
        chart: platformStats.chartOptions.line.chart,
        series: platformStats.mentors["daily"].series,
        xaxis: platformStats.mentors["daily"].xaxis,
    }

    _graphSectionsUser = {
        chart: platformStats.chartOptions.line.chart,
        series: platformStats.users["daily"].series,
        xaxis: platformStats.users["daily"].xaxis,
    }

    get graphSectionsAdmin() {
        return this._graphSectionsAdmin;
    }

    get graphSectionsMentor() {
        return this._graphSectionsMentor
    }
    get graphSectionsUser() {
        return this._graphSectionsUser
    }

    get filterTypeAdmin() {
        return this._filterTypeAdmin;
    }

    get filterTypeMentor() {
        return this._filterTypeMentor;
    }

    get filterTypeUser() {
        return this._filterTypeUser
    }

    setGraphSectionsAdmin(data) {
        this._filterTypeAdmin = data
        this._graphSectionsAdmin = {
            chart: platformStats.chartOptions.bar.chart,
            series: platformStats.admins[data].series,
            xaxis: platformStats.admins[data].xaxis,
        }
    }

    setGraphSectionsMentor(data) {
        this._filterTypeMentor = data
        this._graphSectionsMentor = {
            chart: platformStats.chartOptions.bar.chart,
            series: platformStats.mentors[data].series,
            xaxis: platformStats.mentors[data].xaxis,
        }
    }

    setGraphSectionsUser(data) {
        this._filterTypeUser = data
        this._graphSectionsUser = {
            chart: platformStats.chartOptions.bar.chart,
            series: platformStats.users[data].series,
            xaxis: platformStats.users[data].xaxis,
        }
    }
}

const model = new Model();
export default model;