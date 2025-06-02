import { observer } from "mobx-react-lite";
import { use, useEffect, useState } from "react";
import DivInput from "./input";
import Icon from "./icons";

export default function Search({ list, setList, className = "" }) {

    const [searchInput, setSearchInput] = useState('')
    const [dataList, setDataList] = useState([])

    useEffect(() => {
        console.log(list)
        setDataList(list)
    }, [])

    const search = (e) => {
        setSearchInput(e.target.value)
    }

    

    return (
        
    )
}