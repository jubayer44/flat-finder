import FlatModal from '@/components/Shared/FlatModal/FlatModal';
import FlatForm from '@/components/Forms/FlatForm';
import FlatSelectField from '@/components/Forms/FlatSelectField';
import { Button, Box, Grid } from '@mui/material';
import { FieldValues } from "react-hook-form";
import { useState } from 'react';

const ManageUsersModal = ({ open, setOpen, flatId }: any) => {

    const defaultValues = {
        role: "user",
        status: "Activate"
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
                <Box sx={{ width: { sx: "200px", sm: "400px", md: "500px" } }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6}>
                            <FlatSelectField name="role" size="small" label="Role" required placeholder="Role" fullWidth items={["user", "admin"]} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <FlatSelectField name="status" size="small" label="Status" required placeholder="Status" fullWidth items={["Activate", "Deactivate"]} />
                        </Grid>
                    </Grid>
                    <Button fullWidth type="submit" sx={{ margin: "20px 0" }}>Save Changes</Button>
                </Box>
            </FlatForm>
        </FlatModal>
    )
};

export default ManageUsersModal;