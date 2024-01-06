import { useState, useEffect } from "react";
import axios from "axios";
import Select from 'react-select';
import selectStyle from './selectStyling'

const TransportationRail = () => {

    let [rails, setRails] = useState([])
    let [rail, setRail] = useState([])

    useEffect(() => {
        const getRailStations = async () => {
            let res = await axios.get('http://localhost:8000/api/allRailStations')
            setRails(res.data.data)
        }

        getRailStations()
    }, [])

    return (

     <Select options={rails} styles={selectStyle} placeholder="תחנת רכבת" />

    )
}

export default TransportationRail;