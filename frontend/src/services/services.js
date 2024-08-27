import img from "../img/perfil.jpeg"
import coracao from "../img/coracao.png"


class Services {

    constructor () {}

    async getListPosts () {

        const posts = [
            {
                id : 1,
                photo : img,
                content : [img],
                name : "Josép cadura",
                description : "ola tudo bem me chamo josep cadura e amo uma limonada de limao com bastante açucar"
            },
            {
                id : 2,
                photo : img,
                content : [img, coracao],
                name : "Jacinto leite",
                description : ""
            }
        ]

        return posts

    }

    async getListStorys () {

        const storys = [
            {
                user : "Junior",
                foto_perfil : img,
                storys : [
                    img, img
                ]
            },
            {
                user : "Junior",
                foto_perfil : img,
                storys : [
                    img, img
                ]
            }
        ]

        return storys

    }

    async getListVideos () {

        const videos = [
            {
                src : "https://videos.pexels.com/video-files/2795405/2795405-uhd_1440_2560_25fps.mp4"
            }
        ]

        return videos
    }

}


const services = new Services()

export default services