import style from "../../styles/post.module.css"
import comp from "../../../../img/compartilhar.png"


function SendButton () {
    return <button className={style.button_post}><img style={{width : "70%"}} src={comp} alt="" /></button>
}


export default SendButton