"use client";
import { Box, Button, Grid,  } from "@mui/material";
import FlatForm from "@/components/Forms/FlatForm";
import FlatInput from "@/components/Forms/FlatInput";
import { FieldValues } from "react-hook-form";

const EditProfile = () => {

    const defaultValues = {
       username: "",
       email: ""
    }



    const handleSubmit = (values: FieldValues) => {
        console.log(values)
    };


    return (
             <FlatForm
                onSubmit={handleSubmit}
                defaultValues={defaultValues}
            >
                <Grid container spacing={2} sx={{maxWidth: 600, margin: "auto"}}>
                    <Grid item xs={12} sm={12} md={6}>
                        <FlatInput name="username" label="User Name" placeholder="User Name" type="text" fullWidth required/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <FlatInput name="email" label="Email" placeholder="Email" type="email" fullWidth required/>
                    </Grid>
                <Box sx={{maxWidth: "350px", margin: " 20px auto"}}>
                    <Button type="submit" fullWidth size="small">Save Changes</Button>
                </Box>
                </Grid>
            </FlatForm>
    )
};

export default EditProfile;