import style from "../../styles/post.module.css"
import coracao from "../../../../img/coracao.png"


function LikeButton () {
    return <button className={style.button_post}><img style={{width : "70%"}} src={coracao} alt="" /></button>
}


export default LikeButton