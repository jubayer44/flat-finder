"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const ImageSwiper = ({ flatDetails }: any) => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {flatDetails.photos.map((photo: string, index: number) => (
                <SwiperSlide key={index}><Image height={400} width={700} src={photo} alt={`Photo ${index + 1}`} style={{ maxWidth: '100%', marginBottom: '10px' }} /></SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ImageSwiper;