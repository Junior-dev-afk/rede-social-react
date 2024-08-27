import React, { useState, useEffect } from "react";
import Post from "./elements/Post";
import styles from "./styles/home.module.css";
import Story from "./elements/Story";
import ButtonHomePage from "./elements/ButtonHomePage";
import ButtonVideosPage from "./elements/ButtonVideosPage";
import services from "../../services/services";
import VideoCarousel from "./elements/VideoCarousel";


const Home = () => {
    const [posts, setPosts] = useState([]);
    const [storys, setStorys] = useState([]);
    const [home, setHome] = useState(true);
    const [video, setVideo] = useState(false);
    let videos = []

    useEffect(() => {
        const fetchData = async () => {

            const fetchedPosts = await services.getListPosts();
            const fetchedStorys = await services.getListStorys();
            const fetchVideos = await services.getListVideos()

            setPosts(fetchedPosts);
            setStorys(fetchedStorys);
            videos = fetchVideos

        };

        fetchData();
    }, []);

    const allPosts = posts.map((post) => (
        <Post object = {post} />
    ));

    const moveToPage = (page) => {
        setHome(page === "home");
        setVideo(page === "video");
    };

    return (
        <div className={styles.container_home}>
            <div className={styles.container_outros}>
                <ButtonHomePage onClick={() => moveToPage("home")} />
                <ButtonVideosPage onClick={() => moveToPage("video")} />
            </div>
            {home && (
                <div className={styles.container_posts}>
                    <Story list={storys} />
                    {allPosts}
                    <div className={styles.container_display_storys} ></div>
                </div>
            )}
            {video && (
                <div className={styles.container_posts}>
                    <VideoCarousel videos={videos} />
                </div>
            )}
        </div>
    );
};

export default Home;
