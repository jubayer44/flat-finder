"use client";
import FlatFileUpload from "@/components/Forms/FlatFileUpload";
import FlatForm from "@/components/Forms/FlatForm";
import FlatInput from "@/components/Forms/FlatInput";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import MultipleAmenitiesSelect from "./MultipleAmenitiesSelect";

const FlatPostPage = () => {
    const [amenities, setAmenities] = useState<string[]>([]);

    const defaultValues = {
        location: "",
        rentAmount: "",
        bedroom: "",
        amenities: "",
        description: "",
        file: []
    }



    const handleSubmit = (values: FieldValues) => {
        console.log({...values, amenities})
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
                        <FlatInput name="location" label="Location" placeholder="Location" type="text" fullWidth/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <FlatInput name="rentAmount" label="Rent Amount" placeholder="Rent Amount" type="number" fullWidth/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <FlatInput name="bedroom" label="Number of Bedroom" placeholder="Number of Bedroom" type="number" fullWidth/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <MultipleAmenitiesSelect amenities={amenities} setAmenities={setAmenities}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <FlatInput name="description" label="Description" placeholder="Description" type="text" fullWidth/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <FlatFileUpload title="Select Single or Multiple" name="file" sx={{backgroundColor: "gray"}} />
                    </Grid>
                </Grid>

                <Button fullWidth type="submit" sx={{ margin: "20px 0" }}>Post</Button>

            </FlatForm>
        </Container>
    );
};

export default FlatPostPage;