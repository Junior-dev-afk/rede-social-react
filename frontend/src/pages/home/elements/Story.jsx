import style from "../styles/storys.module.css"

function Story ({list}) {

    const storys = []

    for ( let item of list ) {
        storys.push(
            <img className={style.foto_story} src={item[0]} alt="" />
        )
    }

    return (
        <div className={style.container_storys} >
            {storys}
        </div>
    )
}


export default Story