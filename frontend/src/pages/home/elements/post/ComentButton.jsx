import style from "../../styles/post.module.css"
import coment from "../../../../img/comentario.png"


function ComentButton () {
    return <button className={style.button_post}><img style={{width : "70%"}} src={coment} alt="" /></button>
}


export default ComentButton