import style from "../../styles/post.module.css"


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


export default Indexes