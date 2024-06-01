"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import FlatForm from "@/components/Forms/FlatForm";
import FlatInput from "@/components/Forms/FlatInput";
import { FieldValues } from "react-hook-form";
import { useUpdateUserProfileMutation, useGetMyProfileQuery } from "@/redux/api/userApi";
import { useEffect, useState } from "react";
import { TUserProfile } from '@/types';
import { toast } from "sonner";
import { useRouter } from 'next/navigation';

const EditProfile = () => {
    const [user, setUser] = useState<TUserProfile | any>({})
    const [updateUserProfile, {isLoading: updating}] = useUpdateUserProfileMutation();
    const { data } = useGetMyProfileQuery({});
    const router = useRouter();

    const handleSubmit = async (values: FieldValues) => {
        const updateUserData = {
            username: values?.username || user?.username,
            email: values?.email || user?.email
        };

        try {
            const res = await updateUserProfile(updateUserData);
            if(res?.data?.success){
                router.push("/dashboard")
                toast.success("User updated successfully")
            }
        }
        catch (err: any) {
            console.log(err)
        }

    };

    useEffect(() => {
        setUser(data?.data)
    }, [data]);

    const defaultValues = {
        username: user?.username || "username",
        email: user?.email || "email"
    };


    return (
        <>
            {
                user?.id ? <FlatForm
                    onSubmit={handleSubmit}
                    defaultValues={defaultValues}
                >
                    <Grid container spacing={2} sx={{ maxWidth: 600, margin: "auto" }}>
                        <Grid item xs={12} sm={12} md={6}>
                            <FlatInput name="username" label="User Name" placeholder="User Name" type="text" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <FlatInput name="email" label="Email" placeholder="Email" type="email" fullWidth />
                        </Grid>
                        <Box sx={{ maxWidth: "350px", margin: " 20px auto" }}>
                            <Button type="submit" fullWidth size="small">Save Changes</Button>
                        </Box>
                    </Grid>
                </FlatForm> : <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>Loading...</Typography>
            }
        </>
    )
};

export default EditProfile;