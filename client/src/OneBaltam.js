import './OneBaltam.css'
import TunaImg from './img/tuna.jpg'
import OneBaltamBar from './OneBaltamBar'

const OneBaltam = () => {
    return (
        <>
            <div className="one-baltam">

                <div className='div-baltam-classify-tag'>
                    <span className='baltam-classify-tag'>הופעות</span>
                </div>

                <div className="author-with-img">
                    <img className="profile-pic" />
                    <span className="author"> רוית פרידמן נגר</span>
                </div>
                <div className='baltam-content'>
                    <p>  ההופעה של טונה בקיסריה עוד לא התחילה!</p>
                </div>


                <img src={TunaImg} />
                <div className='time-publish-baltam'>
                    <span dir="rtl">04-01-2024 20:30</span>
                </div>

                <OneBaltamBar />
            </div>

        </>
    )

}


export default OneBaltam