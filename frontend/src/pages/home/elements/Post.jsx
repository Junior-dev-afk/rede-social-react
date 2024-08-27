import style from "../styles/post.module.css"
import LikeButton from "./LikeButton"
import ComentButton from "./ComentButton"
import SendButton from "./SendButton"
import { useState } from "react"


function Post ({object}) {

    return (
        <div className={style.container_post}>
            <div className={style.container_post_foto}>
                <div className={style.foto_post} >
                    <img style={{width : "100%", height : "100%", borderRadius : "50%"}} src={object.photo} alt="" />
                </div>
                <div>{object.name}</div>
            </div>

            <Content list={object.content}/>

            <label >{object.description}</label>

            <div className={style.container_buttons_post} >
                <LikeButton/>
                <ComentButton/>
                <SendButton/>
            </div>  

        </div>
    )

}

function Content ({list}) {

    const [count, setCount] = useState(0)

    return (
        <div className={style.container_post_conteudo} >
            {
                (count > 0) && (
                    <button className={style.button_post_voltar} onClick={
                        ()=> setCount(count - 1)
                    }></button>
                )
            }
            <img src={list[count]} className={style.post_conteudo} />
            <Indexes tamanho={list.length} index={count} />
            {
                (list.length > 1 && count < list.length-1) && (
                    <button className={style.button_post_proximo} onClick={
                        ()=> setCount(count + 1)
                    } ></button>
                )
            }
        </div>
    )

}

function Indexes ({tamanho, index}) {

    const dots = []

    for ( let i = 0; i < tamanho; i++ ) {

        if ( i === index ) {
            dots.push(
                <div style={{
                    backgroundColor:"rgba(150, 150, 150, 0.664)" ,
                    scale : '1.2'
                }} className={style.index}></div>
            )
        } else {
            dots.push(
                <div className={style.index}></div>
            )
        }

    }    

    return (
        <div className={style.container_indexes}>
            {dots}
        </div>
    )

}



export default Post