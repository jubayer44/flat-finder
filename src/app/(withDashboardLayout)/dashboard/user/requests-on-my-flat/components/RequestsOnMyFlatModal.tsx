import FlatModal from '@/components/Shared/FlatModal/FlatModal';
import FlatForm from '@/components/Forms/FlatForm';
import FlatSelectField from '@/components/Forms/FlatSelectField';
import {Button, Box} from '@mui/material';
import { FieldValues } from "react-hook-form";

const RequestsOnMyFlatModal = ({open, setOpen}: any) => {

const handleSubmit = (values: FieldValues) => {
    console.log(values)
}


    const options = ["Pending", "Approved", "Reject"];
    return (
        <FlatModal open={open} setOpen={setOpen} title="Change Status">
            <FlatForm
            onSubmit={handleSubmit}
            defaultValues={{status: "Pending"}}
            >
                <Box sx={{width: {sx: "200px", sm: "400px", md: "500px"}}}>
                <FlatSelectField name="status" label="Status" fullWidth  items={options} size="small"/>
                <Button size="small" type="submit" fullWidth sx={{margin: "10px 0"}}>Save</Button>
                </Box>
            </FlatForm>
        </FlatModal>
    )
};

export default RequestsOnMyFlatModal;