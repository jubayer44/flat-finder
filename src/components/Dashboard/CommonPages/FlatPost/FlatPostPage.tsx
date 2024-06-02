"use client";
import FlatFileUpload from "@/components/Forms/FlatFileUpload";
import FlatForm from "@/components/Forms/FlatForm";
import FlatInput from "@/components/Forms/FlatInput";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import MultipleAmenitiesSelect from "./MultipleAmenitiesSelect";
import uploadImageToCloud from "@/utils/uploadImageToCloudinary";
import { useAddFlatMutation } from "@/redux/api/flatApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {getUserInfo} from '@/services/authServices';

const FlatPostPage = () => {
    const [amenities, setAmenities] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [ addFlat ] = useAddFlatMutation();
    const router = useRouter();

    const uploadedImages: string[] = [];

    const user = getUserInfo();

    const defaultValues = {
        location: "",
        rentAmount: "",
        bedrooms: "",
        amenities: [],
        description: "",
        photos: []
    };

    const handleSubmit = async (values: FieldValues) => {
        setLoading(true);
        const bedrooms = Number(values?.bedrooms);
        const rentAmount = Number(values?.rentAmount);
        if (values?.photos && values?.photos?.length) {
            for (const file of values.photos) {
                const imageUrl = await uploadImageToCloud(file)
                uploadedImages.push(imageUrl)
            }
        }
        const postData = { 
            location: values?.location, 
            description: values?.description, 
            photos: uploadedImages ,
            bedrooms,
            rentAmount,
            amenities, 
        }
        
        try{
            const flat = await addFlat(postData);
            if(flat?.data?.success){
                setLoading(false);
                toast.success("Flat added successfully")
                router.push(`/dashboard/${user?.role}/my-flat-posts`)
            } else {
                setLoading(false);
                toast.error("Something went wrong!")
            }
        }
        catch(err: any){
            console.log(err)
            setLoading(false);
        }
    };

    

    return (
        <Container sx={{ width: { md: 800 } }}>
            <Typography variant="h6" component="h2" sx={{ textAlign: "center", margin: "0 10px", fontWeight: 600, my: 3 }}>Post Your Flat</Typography>
            <FlatForm
                onSubmit={handleSubmit}
                defaultValues={defaultValues}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        <FlatInput name="location" label="Location" placeholder="Location" required type="text" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <FlatInput name="rentAmount" label="Rent Amount" placeholder="Rent Amount" required type="number" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <FlatInput name="bedrooms" label="Number of Bedroom" placeholder="Number of Bedroom" required type="number" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <MultipleAmenitiesSelect amenities={amenities} setAmenities={setAmenities} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <FlatInput name="description" label="Description" placeholder="Description" required type="text" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <FlatFileUpload title="Select Single or Multiple" name="photos" sx={{ backgroundColor: "gray" }} />
                    </Grid>
                </Grid>

                <Button fullWidth disabled={loading} type="submit" sx={{ margin: "20px 0" }}>{loading ? "Loading..." : "Post"}</Button>

            </FlatForm>
        </Container>
    );
};

export default FlatPostPage;