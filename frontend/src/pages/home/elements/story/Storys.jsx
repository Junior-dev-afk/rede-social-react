import { useState } from "react";
import style from "../../styles/storys.module.css"
import Story from "./Story";
import ContentStory from "./ContentStory";


const configs = {
    visible : false,
    index : false,
    allStorys : {},
    setStatusStory : false,
}


function Storys ({list}) {
    
    configs.allStorys = {}

    const [storyAberto, setStatusAberto] = useState(false)
    const [index, setIndex] = useState(0)

    configs.setStatusStory = setStatusAberto

    const storys = gerarStorys(list, setIndex)

    return (
        <div className={style.container_storys}  >
            {storys}
            {storyAberto ? (
                <ContentStory index={index} mudarIndex={setIndex}/>
            ) : null}
        </div>
    )
}

function gerarStorys (list, setIndex) {

    const storys = []

    let index = 0

    for ( let item of list ) {

        configs.allStorys[index] = item

        storys.push(
            <Story index = {index} setIndex = {setIndex}/>
        )

        index++
    }

    return storys

}


export {configs}

export default Storys