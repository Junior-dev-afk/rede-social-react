import { configs } from "./Storys"
import style from "../../styles/storys.module.css"


function Story ({index, setIndex}) {    
    return (
        <img 
        onClick={()=> abrirStory(index, setIndex)} 
        className={style.foto_story} 
        src={configs.allStorys[index].foto_perfil}
        />
    )
}

function abrirStory (index, setIndex) {    
    setIndex(index)
    configs.setStatusStory(true)
}

export default Story