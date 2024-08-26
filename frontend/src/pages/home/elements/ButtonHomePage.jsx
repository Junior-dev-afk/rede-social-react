import style from "../styles/home.module.css"
import home from "../../../img/home.png"


function ButtonHomePage ({onClick}) {
    return (
        <div>
            <button  onClick = {onClick} className={style.button_pages}>
                <img style={{width : "90%"}} src={home} alt="" />
            </button>
        </div>
    )
}

export default ButtonHomePage