import style from "../styles/post.module.css"
import LikeButton from "./LikeButton"
import ComentButton from "./ComentButton"
import SendButton from "./SendButton"


function Post ({photo, name, content}) {

    return (
        <div className={style.container_post}>
            <div className={style.container_post_foto}>
                <div className={style.foto_post} >
                    <img style={{width : "100%", height : "100%", borderRadius : "50%"}} src={photo} alt="" />
                </div>
                <div>{name}</div>
            </div>

            <img src={content} className={style.post_conteudo} />

            <div className={style.container_buttons_post} >
                <LikeButton/>
                <ComentButton/>
                <SendButton/>
            </div>  

        </div>
    )

}


export default Post