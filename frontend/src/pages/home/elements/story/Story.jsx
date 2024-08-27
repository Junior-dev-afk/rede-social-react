import { configs } from "./Storys"
import style from "../../styles/storys.module.css"


function Story ({index}) {
    return (
        <img 
        onClick={()=> abrirStory(index)} 
        className={style.foto_story} 
        src={configs.allStorys[index].foto_perfil}
        />
    )
}

function abrirStory (index) {
    configs.index = index
    configs.setStatusStory(true)
}

export default Story