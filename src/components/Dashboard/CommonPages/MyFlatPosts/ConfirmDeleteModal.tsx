import FlatModal from '@/components/Shared/FlatModal/FlatModal';
import {Stack, Button, Box} from '@mui/material';
import {useGetMyFlatsQuery, useDeleteFlatMutation} from "@/redux/api/flatApi";
import {toast} from 'sonner';

const ConfirmDeleteModal = ({open, setOpen, id}: any) => {
    const [deleteFlat, {isLoading: deleting}] = useDeleteFlatMutation();

    const handleCancel = () => {
        setOpen(false);
    };

    const handleConfirmDelete = async () => {
        try{
            const res = await deleteFlat(id);
            if(res?.data?.success){
                toast.success(res.data.message);
                setOpen(false);
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

export default ConfirmDeleteModal;