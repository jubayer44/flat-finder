"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Box, Container } from '@mui/material';

const ImageSwiper = ({ photos }: {photos: string[]}) => {
    return (
       <Container sx={{maxWidth: {xs: 300, sm: 450, md: 700}, margin: "auto"}}>
             <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {photos?.map((photo: string, index: number) => (
                <SwiperSlide key={index}><Box sx={{maxWidth: 700, maxHeight: 400, overflow: "hidden"}}><Image height={400} width={700} src={photo} alt={`Photo ${index + 1}`} style={{ maxWidth: '700px', marginBottom: '10px' }} layout='responsive'/></Box></SwiperSlide>
            ))}
        </Swiper>
        </Container>
    );
};

export default ImageSwiper;