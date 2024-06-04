"use client";
import FlatModal from '@/components/Shared/FlatModal/FlatModal';
import FlatForm from '@/components/Forms/FlatForm';
import FlatSelectField from '@/components/Forms/FlatSelectField';
import { Button, Box } from '@mui/material';
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import {useState, useEffect} from "react";
import { useUpdateFlatShareRequestStatusMutation } from "@/redux/api/flatShareRequestApi";

type TProps = {
    open: boolean;
    setOpen: any;
    items: any
};

const RequestsOnMyFlatModal = ({ open, setOpen, items }: TProps) => {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState<boolean>(false);
    const [updateFlatShareRequestStatus] = useUpdateFlatShareRequestStatusMutation();

    const defaultValues = { status }

    const handleSubmit = async(values: FieldValues) => {
        setLoading(true);
        const statusData = {
            id: items?.id,
            data: {
                flatId: items?.flatId,
                status: values?.status || items?.status
            }
        };

        try{
            const res = await updateFlatShareRequestStatus(statusData);
            if(res?.data?.success){
                toast.success(res?.data?.message);
                setOpen(false);
                setLoading(false);
            } else {
                toast.error("Something went wrong!");
                setLoading(false);
            }
        }
        catch(err: any){
            console.log(err);
            setLoading(false);
            toast.error(err?.message);
        }

    };

    useEffect(()=> {
        if(!items?.status) return
        setStatus(items?.status);
    }, [items]);

    if(!items?.status) return

    const options = ["PENDING", "APPROVED", "REJECTED"];
    return (
        <FlatModal open={open} setOpen={setOpen} title="Change Status">
            <FlatForm
                onSubmit={handleSubmit}
                defaultValues={defaultValues}
            >
                <Box sx={{ width: { sx: "200px", sm: "400px", md: "500px" } }}>
                    <FlatSelectField name="status" label="Status" fullWidth items={options} size="small" />
                    <Button disabled={loading} size="small" type="submit" fullWidth sx={{ margin: "10px 0" }}>{ loading ? "Saving..." : "Save Changes"}</Button>
                </Box>
            </FlatForm>
        </FlatModal>
    )
};

export default RequestsOnMyFlatModal;