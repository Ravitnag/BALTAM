import { useState, useEffect } from "react";
import axios from "axios";
const TransportationRail = () => {

    let [rails, setRails] = useState([])
    let [rail, setRail] = useState([])

    useEffect(() => {
console.log("bbbb");
        const getRailStations = async () => {
            let res = await axios.get('http://localhost:8000/api/allRailStations')
            setRails(res.data.data)
        }

        getRailStations()
    }, [])
    return (

        <select onChange={e => setRail(e.target.value)}>
            {rails.map(rail => <option>{rail.stop_name}</option>)}
        </select>

    )
}

export default TransportationRail;