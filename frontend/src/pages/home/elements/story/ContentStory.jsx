import style from "../../styles/storys.module.css"
import { configs } from "./Storys"


function ContentStory (index) {
    return (
        <div id = "container_display_storys" className={style.container_display_storys}>
            <div></div>
        </div>
    )
}


window.onclick  = (e) => {

    const container = document.getElementById("container_display_storys")

    if ( container === null ) {
        return
    }

    if ( e.target === container ) {

        configs.setStatusStory(false)
        
    }
    
}

export default ContentStory