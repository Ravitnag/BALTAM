import { useEffect, useState } from "react"
import TransportationRail from "./TransportationRail"
import './css/NewUpdate.css'
import Select from 'react-select';
import selectStyle from './selectStyling'

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






    return (
        <div className="container-form">

            <form className="form">
                <div className="mg-10">
                    {/* <select value={update.type} placeholder="סוג העדכון" onChange={(event) => setUpdate({ ...update, type: event.target.value })}>
                        {typesOfUpdate.map((updateType) => (
                            <option value={updateType.value}>{updateType.label}</option>
                        ))}
                    </select> */}

                    <Select options={typesOfUpdate} placeholder='סוג בלת"מ' onChange={(value)=>setUpdate((perv)=>({...perv, type: value.value}))}
                     styles={selectStyle} />
                </div>

    

                <div className="mg-10">
                    {update.type === "transportaionRail" ?
                        <TransportationRail /> : null}
                </div>

                <div className="mg-10"> 
                    <textarea placeholder='תיאור בלת"מ' />
                </div>




            </form>

            <div>
                  <button className="btn mg-10">לעדכון</button>
            </div>

          

        </div>
    )
}


export default NewUpdate