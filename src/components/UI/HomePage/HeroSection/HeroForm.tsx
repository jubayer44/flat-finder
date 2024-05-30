"use client";
import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import FlatForm from "@/components/Forms/FlatForm";
import FlatInput from "@/components/Forms/FlatInput";
import { FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";
import bannerImage from '@/assets/banner-image.png';
import Image from "next/image";
import { getUserInfo } from "@/services/authServices";
import Link from 'next/link';

const HeroForm = () => {
    const router = useRouter();
    const user = getUserInfo();

    const handleSubmit = (values: FieldValues) => {
        
        const url = `/search-result/?${values?.location && `location=${values.location}`}${values?.bedrooms && `&bedrooms=${values.bedrooms}`}${values?.minPrice && `&minPrice=${values.minPrice}`}${values?.maxPrice && `&maxPrice=${values.maxPrice}`}`;

        router.push(url)
    };

    const defaultValues = {
        location: "",
        bedrooms: "",
        minPrice: "",
        maxPrice: ""
    };

    return (
        <>
            <FlatForm
            onSubmit={handleSubmit}
            defaultValues={defaultValues}
        >
            <Grid container my={2} spacing={2} justifyContent="center">
                <Grid item xs={12} sm={12} md={4}>
                    <FlatInput fullWidth label="Location" name="location" placeholder="Search Location" size="small" type="text" />
                </Grid>

                <Grid item xs={12} sm={4} md={2}>
                    <FlatInput fullWidth label="Bedrooms" name="bedrooms" placeholder="0" size="small" type="number" />
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                    <FlatInput label="Min Price" name="minPrice" placeholder="0" size="small" type="number" />
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                    <FlatInput label="Max Price" name="maxPrice" placeholder="0" size="small" type="number" />
                </Grid>
                <Grid item xs={12} sm={12} md={2} sx={{ textAlign: "left" }}>
                    <Button type="submit" fullWidth size="small">Search</Button>
                </Grid>
            </Grid>
        </FlatForm>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{width: 800}}>
                
            <Image src={bannerImage} alt="logo" height={500} width={800} layout="responsive"/>
            </Box>
        </Box>
        <Box sx={{ maxWidth: 400, margin: "0 auto" }}>
            <Button component={Link} href={`/dashboard/${user?.role ? user?.role : "user"}/flat-post`} fullWidth size="small">Share Your Flat</Button>
        </Box>
        </>
    )
};

export default HeroForm;