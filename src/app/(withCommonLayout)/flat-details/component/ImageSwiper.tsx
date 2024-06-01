"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Box } from '@mui/material';

const ImageSwiper = ({ photos }: {photos: string[]}) => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {photos?.map((photo: string, index: number) => (
                <SwiperSlide key={index}><Box sx={{maxWidth: 700, maxHeight: 400, overflow: "hidden"}}><Image height={400} width={700} src={photo} alt={`Photo ${index + 1}`} style={{ maxWidth: '100%', marginBottom: '10px' }} /></Box></SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ImageSwiper;