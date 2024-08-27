import { useState } from "react"
import style from "../styles/storys.module.css"

let allStorys = {}

function Storys ({list}) {

    const storys = []

    allStorys = {}

    let index = 0

    for ( let item of list ) {
        allStorys[index] = item
        storys.push(
            <Story index = {index} />
        )
        index++
    }

    return (
        <div className={style.container_storys} >
            {storys}
        </div>
    )
}

function Story ({index}) {

    console.log("storys : ",allStorys[index]);
    

    return (
        <img onClick={()=> abrirStory(index)} className={style.foto_story} src={allStorys[index].foto_perfil} alt="" />
    )

}

function abrirStory (index) {

    console.log(allStorys[index]);

}


export default Storys