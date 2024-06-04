import FlatModal from '@/components/Shared/FlatModal/FlatModal';
import FlatForm from '@/components/Forms/FlatForm';
import FlatSelectField from '@/components/Forms/FlatSelectField';
import { Button, Box, Grid } from '@mui/material';
import { FieldValues } from "react-hook-form";
import { useState, useEffect } from 'react';
import { useUpdateUserRoleOrStatusMutation } from '@/redux/api/userApi';
import { toast } from 'sonner';
import { TUserProfile } from '@/types';

type TUpdatedValues = {
    id: string;
    data: {
    role: string;
    status: string;
    }
};

type TProps = {
    open: boolean;
    setOpen: any;
    user?: any
}

const ManageUsersModal = ({ open, setOpen, user }: TProps) => {
    const [updateUserRoleOrStatus, {isLoading}] = useUpdateUserRoleOrStatusMutation();
    const [userInfo, setUserInfo] = useState<TUserProfile>({} as TUserProfile);

    const defaultValues = {
        role: userInfo?.role || "",
        status: userInfo?.status || ""
    };

    const handleSubmit = async (values: FieldValues) => {
        const updatedValues: TUpdatedValues = {
            id: user!.id || "",
            data: {
                role: values.role || userInfo.role,
                status: values.status || userInfo.status
            }
        };

        try{
            const res = await updateUserRoleOrStatus(updatedValues);
            if(res?.data?.success){
                toast.success(res?.data?.message);
                setOpen(false);
            } else {
                setOpen(false);
                toast.error("Something went wrong!");
            }
        }
        catch(err: any){
            setOpen(false);
            console.log(err);
            toast.error(err?.message)
        }
    };

    useEffect(()=> {
        if(!user?.role) return;
        setUserInfo(user);
    }, [user]);

    if(!user?.role) return;

    return (
        <FlatModal open={open} setOpen={setOpen} title="Change Status">
            <FlatForm
                onSubmit={handleSubmit}
                defaultValues={defaultValues}
            >
                <Box sx={{ width: { sx: "200px", sm: "400px", md: "500px" } }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6}>
                            <FlatSelectField name="role" size="small" label="Role" required placeholder="Role" fullWidth items={["USER", "ADMIN"]} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <FlatSelectField name="status" size="small" label="Status" required placeholder="Status" fullWidth items={["ACTIVATE", "DEACTIVATE"]} />
                        </Grid>
                    </Grid>
                    <Button fullWidth disabled={isLoading} type="submit" sx={{ margin: "20px 0" }}>{ isLoading ? "Loading..." : "Save Changes" }</Button>
                </Box>
            </FlatForm>
        </FlatModal>
    )
};

export default ManageUsersModal;