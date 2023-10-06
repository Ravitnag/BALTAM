import { useEffect, useState } from "react"
import TransportationRail from "./TransportationRail"

const typesOfUpdate = [
    { label: "תחבורה - רכבת", value: "transportaionRail" },
    { label: "תחבורה - חסימת כבישים", value: "transportationRoad" },
    { label: "תרבות - תחילת מופע", value: "entertainment" },
]

const NewUpdate = () => {

    const [update, setUpdate] = useState({
        title: "",
        type: "transportaionRail",
        time: "",
        field: "",
        area: "",
        subject: "",
        description: "",
        img: ""
    })

    useEffect(() => {
        console.log(update);
    }, [update])


    return (
        <div>

            <form>
                <select value={update.type} placeholder="סוג העדכון" onChange={(event) => setUpdate({ ...update, type: event.target.value })}>
                    {typesOfUpdate.map((updateType) => (
                        <option value={updateType.value}>{updateType.label}</option>
                    ))}
                </select>

                {update.type === "transportaionRail" ?
                    <TransportationRail /> : null}

            </form>

        </div>
    )
}


export default NewUpdate