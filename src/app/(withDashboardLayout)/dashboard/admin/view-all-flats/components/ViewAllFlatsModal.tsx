import FlatModal from '@/components/Shared/FlatModal/FlatModal';
import FlatForm from '@/components/Forms/FlatForm';
import FlatInput from '@/components/Forms/FlatInput';
import {Button, Box, Grid} from '@mui/material';
import { FieldValues } from "react-hook-form";
import FlatFileUpload from '@/components/Forms/FlatFileUpload';
import MultipleAmenitiesSelect from '@/components/Dashboard/CommonPages/FlatPost/MultipleAmenitiesSelect';
import { useState } from 'react';

const ViewAllFlatsModal = ({open, setOpen, flatId}: any) => {
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
    console.log(values)
}


    return (
        <FlatModal open={open} setOpen={setOpen} title="Change Status">
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

                <Button fullWidth type="submit" sx={{ margin: "20px 0" }}>Save Changes</Button>

            

                </Box>
            </FlatForm>
        </FlatModal>
    )
};

export default ViewAllFlatsModal;