import FlatModal from '@/components/Shared/FlatModal/FlatModal';
import {Stack, Button, Box} from '@mui/material';
import { useDeleteUserMutation } from "@/redux/api/userApi";
import {toast} from 'sonner';

const ConfirmDeleteUserModal = ({open, setOpen, id}: any) => {
    const [deleteUser, {isLoading: deleting}] = useDeleteUserMutation();

    const handleCancel = () => {
        setOpen(false);
    };

    const handleConfirmDelete = async () => {
        try{
            const res = await deleteUser(id);
            if(res?.data?.success){
                toast.success(res.data.message);
                setOpen(false);
            } else{
                toast.error("Something went wrong!");
            }
            
        }
        catch(err: any){
            console.log(err)
            toast.error(err?.message)
        }
    };
    return (
        <FlatModal open={open} setOpen={setOpen} title="Confirm Delete">
            <Stack direction="row" spacing={1}>
                {
                    deleting ? 
                    <Box sx={{fontSize: "16", color: "red", px: 4}}>deleting...</Box> :
                    <>
                    <Button size="small" sx={{backgroundColor: "gray"}} onClick={()=> handleCancel()}>Cancel</Button>
                    <Button size="small" sx={{backgroundColor: "red"}}  onClick={()=> handleConfirmDelete()}>Delete</Button>
                    </>
                }
            </Stack>
        </FlatModal>
    )
};

export default ConfirmDeleteUserModal;