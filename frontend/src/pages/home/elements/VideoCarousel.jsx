import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


const VideoCarousel = ({ videos }) => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            loop
            autoplay={{ delay: 5000 }}
        >
            {videos.map((video, index) => (
                <SwiperSlide key={index}>
                    <video width="100%" controls>
                        <source src={video.src} type="video/mp4" />
                        Seu navegador não suporta o elemento de vídeo.
                    </video>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default VideoCarousel;
