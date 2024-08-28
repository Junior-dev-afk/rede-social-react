import { useState } from "react";
import style from "../../styles/storys.module.css"
import { configs } from "./Storys"
import Indexes from "../post/Indexes";


function ContentStory ({index, mudarIndex}) {

    const maxPage = configs.allStorys[index].storys    

    const user = configs.allStorys[index].user
    const foto_perfil = configs.allStorys[index].foto_perfil   


    const itemListStory = maxPage.findIndex(story => story.visualizado === false);
    const result = itemListStory === -1 ? 0 : itemListStory;

    const [pageStory, setPageStory] = useState(result)    
  
    return (
        <div id = "container_display_storys" className={style.container_display_storys}>
            <div className={style.container_conteudo_display_story} >
                
                <img className={style.contaudo_display_story} src={maxPage[pageStory].content} alt="" />
                
                <div className={style.infos_story} >
                    <img className={style.infos_story_foto} src={foto_perfil} alt="" />
                    <label  className={style.infos_story_nome}>{user}</label>
                </div>

                <ButtonExit/>

                <ButtonLeft
                    setPageStory={setPageStory}
                    pageStory={pageStory}
                    mudarIndex={mudarIndex}
                    index={index}
                />

                <ButtonRight 
                    setPageStory={setPageStory} 
                    pageStory={pageStory}
                    mudarIndex={mudarIndex}
                    index={index}
                    maxPage ={maxPage}
                />

                <Indexes 
                    tamanho={maxPage.length} 
                    index={pageStory} 
                />
                
            </div>
        </div>
    )
}

function ButtonExit () {

    return <button style={{
        width : "30px",
        height : "30px",
        borderRadius : "50%",
        backgroundColor : "red",
        position : "absolute",
        border : "none",
        color : "white",
        outline : "1px solid black",
        top : 10,
        right : 10
    }}
    onClick={
        () => configs.setStatusStory(false)
    }
    >X</button>

}

function ButtonLeft ({setPageStory, pageStory, mudarIndex, index}) {
    return (
        
            (pageStory > 0) ? (

                <button className={`${style.button_proximo_anterior} ${style.button_anterior}`} onClick={
                    () => setPageStory(pageStory - 1)
                }> &lt; </button>

            ) : (

                ( index > 0 ) && (

                    <button className={`${style.button_proximo_anterior} ${style.button_anterior}`} onClick={
                        () => {
                            setPageStory(0)
                            mudarIndex(index -1)
                        }
                    }> &lt; </button>

                )
                
            )
        
    )
}

function ButtonRight ({setPageStory, pageStory, mudarIndex, index, maxPage}) {

    return (
        (pageStory +1 < maxPage.length) ? (

            <button className={`${style.button_proximo_anterior} ${style.button_proximo}`} onClick={
                () => setPageStory(pageStory + 1)
            } > &gt; </button>
    
        ) : (
    
            ( index + 1 in configs.allStorys ) && (
    
                <button className={`${style.button_proximo_anterior} ${style.button_proximo}`} onClick={
                    () => {
                        setPageStory(0)
                        mudarIndex(index +1)
                    }
                }> &gt; </button>
    
            )
            
        )
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