import Post from "./elements/Post"
import styles from "./styles/home.module.css"
import img from "../../img/perfil.jpeg"
import Story from "./elements/Story"
import ButtonHomePage from "./elements/ButtonHomePage"
import ButtonVideosPage from "./elements/ButtonVideosPage"
import { useState } from "react"


const posts = [
    {
        photo : img,
        name : "Junior",
        content : img
    },
    {
        photo : img,
        name : "Junior",
        content : img
    }
]

const storys = [
    [img]
]


function Home () {

    const allPosts = []

    for ( let post of posts ) {
        console.log(post);
        
        allPosts.push(
            <Post photo={post.photo} name={post.name} content={post.content}/>
        )
    }    

    const [home, setHome] = useState(true)
    const [video, setVideo] = useState(false)

    function moveToPage (page) {

        setHome(false)
        setVideo(false)  
                

        if ( page == "home" ) {
            setHome(true)
        }

        if ( page == "video" ) {
            setVideo(true)
        }

    }

    return(
        <div className={styles.container_home} >
            <div className={styles.container_outros} >
                <ButtonHomePage onClick={()=> moveToPage("home")}/>
                <ButtonVideosPage onClick={()=> moveToPage("video")}/>
            </div>
            {
                home && (
                    <div className={styles.container_posts}>
                        <Story list = {storys}/>
                        {allPosts}
                    </div>
                ) 
            }
            {
                video && (
                    <div className={styles.container_posts}>
                        <div style={{color:"white"}}>
                            Video
                        </div>
                    </div>
                )
            }
            
        </div>
    )

}


export default Home