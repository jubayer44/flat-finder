"use client";
import FlatModal from '@/components/Shared/FlatModal/FlatModal';
import FlatForm from '@/components/Forms/FlatForm';
import FlatInput from '@/components/Forms/FlatInput';
import {Button, Box, Grid, Typography, Stack} from '@mui/material';
import { FieldValues } from "react-hook-form";
import { useState, useEffect } from 'react';
import { useGetSingleFlatQuery, useRemoveFlatPhotoMutation, useUpdateFlatMutation } from '@/redux/api/flatApi';
import CancelIcon from '@mui/icons-material/Cancel';
import Image from 'next/image';
import uploadImageToCloud from '@/utils/uploadImageToCloudinary';
import {toast} from 'sonner';
import {useRouter} from 'next/navigation';
import MultipleAmenitiesSelect from '../FlatPost/MultipleAmenitiesSelect';
import FlatFileUpload from '@/components/Forms/FlatFileUpload';

const ViewAllFlatsModal = ({open, setOpen, flatId}: any) => {
    const [removeFlatPhoto] = useRemoveFlatPhotoMutation();
    const [updateFlat, {isLoading}] = useUpdateFlatMutation();
    const { data } = useGetSingleFlatQuery(flatId);
    const flat = data?.data;
    const [amenities, setAmenities] = useState<string[]>(flat?.amenities || []);
    const router = useRouter();

    const uploadedImages: string[] = []
        
    const handleSubmit = async (values: FieldValues) => {
        const bedrooms = Number(values?.bedrooms || flat?.bedrooms);
        const rentAmount = Number(values?.rentAmount || flat?.rentAmount);
        if (values?.photos && values?.photos?.length) {
            for (const file of values.photos) {
                const imageUrl = await uploadImageToCloud(file)
                uploadedImages.push(imageUrl)
            }
        }
        const postData = { 
            id: flat?.id,
            data: {
                location: values?.location, 
                description: values?.description, 
                photos: [...flat.photos, ...uploadedImages] ,
                bedrooms,
                rentAmount,
                amenities, 
            }
        };


        try{
            const flatUpdate = await updateFlat(postData);
            if(flatUpdate?.data?.success){
                setOpen(false);
                toast.success("Flat updated successfully")
                router.push(`/dashboard/admin/view-all-flats`)
            } else {
                toast.error("Something went wrong!")
            }
        }
        catch(err: any){
            console.log(err)
            toast.error(err?.message)
        }

    };

    const handleRemovePhoto = async (url: string) => {
        try{
            const removePhoto = {
                imageLink: url,
                id: flat?.id
            };
             await removeFlatPhoto(removePhoto);
        }
        catch(err: any){
            console.log(err)
        }
    }
    

    
    useEffect(()=> {
        setAmenities(flat?.amenities);
    }, [data])

    const defaultValues = {
        location: flat?.location || "",
        rentAmount: flat?.rentAmount || "",
        bedrooms: flat?.bedrooms || "",
        amenities: amenities,
        description: flat?.description || "",
        photos: []
    };

    if(!flat?.id){
        return
    }

    return (
        <FlatModal open={open} setOpen={setOpen} title="Change Status">
            <Box>
                {
                    flat?.id ? 
                    <FlatForm
            onSubmit={handleSubmit}
            defaultValues={defaultValues}
            >
                <Box sx={{width: {sx: "200px", sm: "400px", md: "500px"}}}>

             
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        <FlatInput name="location" label="Location" placeholder="Location" type="text" fullWidth/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <FlatInput name="rentAmount" label="Rent Amount" placeholder="Rent Amount" type="number" fullWidth/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <FlatInput name="bedrooms" label="Number of Bedroom" placeholder="Number of Bedroom" type="number" fullWidth/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <MultipleAmenitiesSelect amenities={amenities} setAmenities={setAmenities}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <FlatInput name="description" label="Description" placeholder="Description" type="text" fullWidth/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Stack direction="row" spacing={2}>
                            {
                                flat?.photos?.map((photo: string, i: number) => (
                                    <Box key={i} sx={{position: "relative"}}>
                                        <CancelIcon 
                                        sx={{color: "red", position: "absolute", right: "-12px", top: "-12px", cursor: "pointer"}} 
                                        onClick={()=> handleRemovePhoto(photo)}/>
                                    <Box sx={{maxWidth: "90px", maxHeight: "70p", overflow: "hidden"}}>
                                        <Image src={photo} alt='flat-image' width={80} height={80}/>
                                    </Box>
                                    </Box>

                                    
                                ))
                            }
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <FlatFileUpload title="Select Single or Multiple" name="photos" sx={{backgroundColor: "gray"}} />
                    </Grid>
                </Grid>
                <Button disabled={isLoading} fullWidth type="submit" sx={{ margin: "20px 0" }}> { isLoading ? "Saving..." :  "Save Changes"}</Button>
                </Box>
            </FlatForm> : 
            <Typography sx={{textAlign: "center", my: 4, px: 5}}>Loading...</Typography>
                }
            </Box>
        </FlatModal>
    )
};

export default ViewAllFlatsModal;