import { useState } from "react";
import style from "../../styles/storys.module.css"
import Story from "./Story";
import ContentStory from "./ContentStory";


const configs = {
    visible : false,
    index : false,
    allStorys : {},
    setStatusStory : false
}


function Storys ({list}) {
    
    configs.allStorys = {}

    const [storyAberto, setStatusAberto] = useState(false)

    configs.setStatusStory = setStatusAberto

    const storys = gerarStorys(list)

    return (
        <div className={style.container_storys}  >
            {storys}
            {storyAberto ? (
                <ContentStory index={configs.index}/>
            ) : null}
        </div>
    )
}

function gerarStorys (list) {

    const storys = []

    let index = 0

    for ( let item of list ) {

        configs.allStorys[index] = item

        storys.push(
            <Story index = {index}/>
        )

        index++
    }

    return storys

}


export {configs}

export default Storys