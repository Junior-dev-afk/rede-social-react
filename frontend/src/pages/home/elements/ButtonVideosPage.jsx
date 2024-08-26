import style from "../styles/home.module.css"
import video from "../../../img/video.png"


function ButtonVideosPage ({onClick}) {
    return (
        <div>
            <button onClick = {onClick} className={style.button_pages} >
                <img style={{width:"90%"}} src={video} alt="" />
            </button>
        </div>
    )
}

export default ButtonVideosPage